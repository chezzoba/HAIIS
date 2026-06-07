function handler(event) {
    var req = event.request;
    var uri = req.uri;
    var host = req.headers.host.value;

    // 1. www → apex redirect
    if (host.startsWith('www.'))
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { location: { value: 'https://' + host.slice(4) + uri } }
        };

    // 2. Top-level doc aliases → canonical /documentation/* paths
    if (/^\/(patterns|security|glossary|governance|playbooks|risk)(\/|$)/.test(uri))
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { location: { value: '/documentation' + uri } }
        };

    // 3. Append .html to extensionless paths (static S3 export)
    if (uri !== '/' && !uri.includes('.'))
        req.uri = uri.replace(/\/?$/, '.html');

    return req;
}
