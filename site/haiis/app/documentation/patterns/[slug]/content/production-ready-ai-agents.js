export const meta = {
  title: 'Production-ready multi-agent system for clinical research',
  subtitle: 'Building a multi-agent AI system for evidence synthesis and clinical literature review',
  author: 'Kaizad Wadia',
  published: 'September 5, 2025',
  source: 'Builder Hub',
  sourceUrl: 'https://builder.aws.com/content/32H2xLIwuR6eJIoFoJCSipubyxd/building-production-ready-ai-agents-with-web-capabilities',
  clouds: ['AWS', 'Azure', 'GCP'],
  previewImage: '/img/blogs/agentsweb.webp',
};

export default function Content() {
  return (
    <>
      <p>
        This tutorial demonstrates how to build production-ready AI agents capable of searching the web and
        synthesising information, using Tavily for managed web access, the Strands SDK for multi-agent
        orchestration, and a managed agent runtime for secure, scalable deployment. We use a clinical research
        assistant as our example: a system that helps care teams and researchers rapidly synthesise evidence from
        published literature and real-time clinical data sources.
      </p>
      <p>
        A managed agent runtime provides a production-ready toolkit to deploy and operate highly capable AI agents
        securely at scale. It offers infrastructure purpose-built for dynamic agent workloads, powerful tools to
        enhance agents, and essential controls for real-world deployment. This includes a platform to host agents and
        MCP servers, a gateway for third-party tool integrations, a memory solution for persistent context, and
        identity management.
      </p>

      <h2>Overview</h2>
      <p>
        There are several ways to give AI agents access to the web. You can build a custom scraper, use a fully
        managed browser automation service that lets agents click, scroll, and interact with pages directly, or use
        a search API like Tavily that provides structured web search and content extraction without the overhead of
        browser automation. Tavily integrates natively with the Strands framework, so no custom tool wrappers are
        needed.
      </p>
      <p>
        The Strands SDK supports several multi-agent collaboration patterns out of the box: swarms (agents share
        memory and state, choosing to invoke each other), graph/workflow (deterministic sequences of agent
        invocations), and agent-as-a-tool. The agent-as-a-tool pattern lets a single orchestrator invoke
        specialised sub-agents as if they were capabilities, much like a senior clinician delegating to
        specialists. Each sub-agent can run a different foundation model tuned for its task, and together they
        outperform a single generalist model on complex, multi-step problems.
      </p>
      <p>In this example, we have three agents:</p>
      <ul>
        <li>
          <strong>Literature Researcher Agent:</strong> Uses web search and content extraction to find and
          summarise relevant clinical studies, guidelines, and trial results.
        </li>
        <li>
          <strong>Clinical Data Analyst Agent:</strong> Retrieves and analyses structured clinical metrics
          such as trial endpoints, safety signals, and population statistics from internal data sources.
        </li>
        <li>
          <strong>Orchestrator Agent:</strong> Coordinates between the two specialists and synthesises their
          outputs into a coherent evidence summary for the care team.
        </li>
      </ul>

      <h2>Prerequisites</h2>
      <ul>
        <li>Cloud account with appropriate permissions</li>
        <li>Tavily API key</li>
        <li>Python 3.9+</li>
        <li>Docker installed</li>
        <li>Cloud CLI configured</li>
      </ul>

      <h2>Walkthrough</h2>

      <h3>Step 1: Set Up Dependencies</h3>
      <p>Create your <code>requirements.txt</code>:</p>
      <pre><code>{`strands
strands-tools
boto3
bedrock-agentcore-starter-toolkit`}</code></pre>

      <h3>Step 2: Configure the Tavily API Key</h3>
      <p>
        Store your Tavily API key in a secrets manager, then retrieve it at runtime and set it as an environment
        variable for the Strands-Tavily integration. Avoid hardcoding credentials in application code. This is
        especially important in regulated healthcare environments where audit trails for secret access are required.
      </p>
      <pre><code>{`# literature_researcher.py

import boto3
import json
import os

secrets_client = boto3.client('secretsmanager', region_name="us-east-1")

def get_api_key(secret_id: str = 'clinicalresearch/tavily/apikey'):
    response = secrets_client.get_secret_value(SecretId=secret_id)
    secret_value = response['SecretString']
    return json.loads(secret_value)

# Set environment variable
os.environ['TAVILY_API_KEY'] = get_api_key()['key']`}</code></pre>

      <h3>Step 3: Create the Literature Researcher Agent</h3>
      <p>
        The literature researcher uses Tavily tools to search PubMed, clinical guidelines, and other medical
        sources, then writes a structured evidence summary:
      </p>
      <pre><code>{`# literature_researcher.py

from strands import Agent, tool
from strands.models import BedrockModel
from strands_tools.tavily import tavily_search, tavily_extract, tavily_crawl

def get_literature_researcher(memory_id: str, session_id: str = ''):
    model = BedrockModel(model_id="us.amazon.nova-pro-v1:0", region="us-east-1")
    
    researcher = Agent(
        model=model,
        system_prompt=(
            "You are a clinical literature researcher. Given a query, search for relevant "
            "clinical studies, systematic reviews, and treatment guidelines. Summarise key "
            "findings, evidence quality, and clinical implications in a structured report."
        ),
        tools=[tavily_search, tavily_extract, tavily_crawl],
        state={'actor_id': 'literature_researcher'} | ({'session_id': session_id} if session_id else {})
    )

    @tool
    def literature_researcher(query: str) -> str:
        """
        Search clinical literature and guidelines for a given query.

        Args:
            query: Clinical question or topic to research

        Returns:
            Structured evidence summary with citations
        """
        return str(researcher(query))
    
    return literature_researcher`}</code></pre>

      <h3>Step 4: Create the Clinical Data Analyst Agent</h3>
      <p>
        This agent retrieves and analyses structured clinical metrics from internal data sources, for example
        trial endpoints, adverse event rates, or population-level statistics:
      </p>
      <pre><code>{`# clinical_analyst.py

from strands import Agent, tool
from typing import Dict, Any

@tool
def get_clinical_metrics(condition: str) -> Dict[str, Any]:
    """Fetches key clinical metrics for a given condition or intervention."""
    # In production this would query an internal clinical data warehouse or FHIR API
    return {
        "status": "success",
        "data": {
            "condition": condition,
            "prevalence": "...",
            "standard_of_care": "...",
            "key_endpoints": "...",
            "safety_signals": "...",
        }
    }

def get_clinical_analyst(memory_id: str, session_id: str = ''):
    from strands import Agent
    from strands.models import BedrockModel

    model = BedrockModel(model_id="us.amazon.nova-pro-v1:0", region="us-east-1")
    
    analyst = Agent(
        model=model,
        system_prompt=(
            "You are a clinical data analyst. Use the available tools to retrieve and interpret "
            "structured clinical metrics. Provide clear, evidence-based analysis suitable for "
            "clinical decision support."
        ),
        tools=[get_clinical_metrics],
        state={'actor_id': 'clinical_analyst'} | ({'session_id': session_id} if session_id else {})
    )

    @tool
    def clinical_analyst(query: str) -> str:
        """Analyses structured clinical data for a given condition or intervention."""
        return str(analyst(query))
    
    return clinical_analyst`}</code></pre>

      <h3>Step 5: Create the Orchestrator Agent</h3>
      <p>
        The orchestrator coordinates the two specialists and synthesises their outputs into a unified clinical
        evidence summary:
      </p>
      <pre><code>{`# orchestrator.py

from strands import Agent
from strands.models import BedrockModel
from clinical_analyst import get_clinical_analyst
from literature_researcher import get_literature_researcher

def get_orchestrator(memory_id: str, session_id: str = ''):
    model = BedrockModel(model_id="us.amazon.nova-pro-v1:0", region="us-east-1")
    
    literature_researcher = get_literature_researcher(memory_id, session_id)
    clinical_analyst = get_clinical_analyst(memory_id, session_id)
    
    return Agent(
        model=model,
        system_prompt=(
            "You are a clinical research assistant. Use the literature researcher to find "
            "published evidence and the clinical analyst for structured data. Combine their "
            "outputs into a concise, actionable evidence summary for the care team."
        ),
        tools=[literature_researcher, clinical_analyst],
        state={'actor_id': 'orchestrator'} | ({'session_id': session_id} if session_id else {})
    )`}</code></pre>

      <h3>Step 6: Give the Agent Memory (Optional)</h3>
      <p>
        A managed memory capability allows agents to maintain both short-term and long-term context. Short-term
        memory persists for the duration of a session, which is useful for tracking the thread of a clinical query
        across multiple turns. Long-term memory extracts durable insights from session history and stores them in a
        semantically searchable form, enabling the system to recall a clinician&apos;s preferences, prior queries,
        or patient-specific context across sessions.
      </p>
      <p>
        In a healthcare context, long-term memory should be scoped carefully: patient-identifiable information
        should not be stored in general-purpose memory stores without appropriate access controls and audit logging.
        Hooks in the Strands SDK let you intercept agent events to implement custom memory write and read logic,
        giving you fine-grained control over what gets persisted and when.
      </p>

      <h3>Step 7: Create the Invocation Entrypoint</h3>
      <p>
        Define a streaming entrypoint that the runtime will call when the agent is invoked. Streaming is important
        for clinical use cases where responses can be long — clinicians should see results as they are generated
        rather than waiting for the full output:
      </p>
      <pre><code>{`# main.py

import asyncio
from bedrock_agentcore.runtime import BedrockAgentCoreApp
from orchestrator import get_orchestrator

app = BedrockAgentCoreApp()

@app.entrypoint
async def clinical_research_assistant(payload, context):
    """
    Invoke the clinical research assistant with a query.
    """
    user_input = payload.get("prompt")

    orchestrator = get_orchestrator(
        memory_id=AGENTCORE_MEMORY_ID,
        session_id=context.session_id
    )
    
    async for event in orchestrator.stream_async(user_input):
        if "data" in event:
            yield event["data"]

if __name__ == "__main__":
    app.run()`}</code></pre>
      <p>
        The runtime automatically manages session lifecycle, passing a session ID through the context object on
        each invocation. This means the orchestrator can maintain conversational continuity across a multi-turn
        clinical query without any additional session management code.
      </p>

      <h3>Step 8: Deployment</h3>
      <p>
        The starter toolkit automates containerisation and deployment. It generates a Dockerfile, builds the image,
        pushes it to a container registry, and registers the agent endpoint:
      </p>
      <pre><code>{`# deploy.py

from bedrock_agentcore_starter_toolkit import Runtime

agentcore_runtime = Runtime()

response = agentcore_runtime.configure(
    entrypoint="main.py",
    auto_create_execution_role=True,
    auto_create_ecr=True,
    requirements_file="requirements.txt",
    region="us-east-1",
    agent_name="clinical_research_assistant"
)

launch_result = agentcore_runtime.launch()

print("Endpoint ARN:")
print(launch_result.agent_arn)`}</code></pre>

      <h3>Step 9: Invoke the Endpoint</h3>
      <p>
        Once deployed, the agent can be invoked with a streaming client. The session ID enables continuity across
        a multi-turn clinical conversation:
      </p>
      <pre><code>{`# streaming_invocation.py

import boto3
import json
import uuid
import os

class ClinicalResearchStreamer:
    def __init__(self):
        self.region = os.getenv('AWS_REGION', 'us-east-1')
        self.agent_arn = os.getenv('AGENT_ARN')
        self.client = boto3.client('bedrock-agentcore', region_name=self.region)
    
    def stream_response(self, prompt, session_id=None):
        """Generator that yields streaming response chunks."""
        if not session_id:
            session_id = str(uuid.uuid4())
            
        response = self.client.invoke_agent_runtime(
            agentRuntimeArn=self.agent_arn,
            qualifier="DEFAULT",
            payload=json.dumps({"prompt": prompt}),
            runtimeSessionId=session_id
        )
        
        if "text/event-stream" in response.get("contentType", ""):
            content = []
            for line in response["response"].iter_lines(chunk_size=1):
                if line:
                    line = line.decode("utf-8")
                    if line.startswith("data: "):
                        data = line[6:].replace('"', '').replace("\\n", "\\n")
                        content.append(data)
                        yield "".join(content)

if __name__ == "__main__":
    streamer = ClinicalResearchStreamer()
    prompt = "Summarise current evidence on GLP-1 agonists for heart failure with preserved ejection fraction"
    session_id = "CLINICIAN-SESSION-001"
    
    for partial_response in streamer.stream_response(prompt, session_id):
        print(partial_response)`}</code></pre>

      <h2>Best Practices for Healthcare Deployments</h2>
      <p>
        The architecture above is production-capable, but regulated healthcare environments require additional
        hardening before go-live:
      </p>
      <ul>
        <li>
          <strong>Secret Management:</strong> Store all API keys and credentials in a secrets manager with
          rotation policies. Audit access to secrets as part of your compliance posture.
        </li>
        <li>
          <strong>PHI Boundaries:</strong> Ensure patient-identifiable information does not flow into external
          APIs (including web search). Scrub or de-identify queries before they leave your environment.
        </li>
        <li>
          <strong>Error Handling:</strong> Implement robust error handling in all tool functions. A failed tool
          call should surface a graceful degradation message, not a raw exception.
        </li>
        <li>
          <strong>Rate Limiting:</strong> Be mindful of API rate limits for web search services, especially
          under concurrent clinical user load.
        </li>
        <li>
          <strong>Audit Logging:</strong> Log all agent invocations, tool calls, and responses for audit and
          traceability. This is a requirement under most healthcare AI governance frameworks.
        </li>
        <li>
          <strong>Monitoring:</strong> Use the runtime&apos;s observability features alongside your cloud
          provider&apos;s monitoring service to track latency, error rates, and usage patterns in production.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        This architecture provides a robust foundation for building production-ready clinical AI agents with
        real-time web research capabilities. The agent-as-a-tool pattern lets specialised agents — a literature
        researcher and a clinical data analyst — collaborate under an orchestrator to produce richer, more accurate
        outputs than a single model could achieve alone. With managed memory, streaming responses, and a
        containerised deployment model, the system is well-suited to the reliability and auditability demands of
        regulated healthcare environments.
      </p>
    </>
  );
}
