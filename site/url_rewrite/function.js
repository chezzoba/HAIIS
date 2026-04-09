// Documentation subpages that should rewrite to /documentation/...
var docSubpages = [
    '/patterns',
    '/security',
    '/glossary',
    '/governance',
    '/playbooks'
];

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Remove trailing slash for comparison (except for root)
    var cleanUri = (uri !== "/" && uri.endsWith('/')) ? uri.slice(0, -1) : uri;
    
    // Check if this is a top-level documentation subpage
    if (docSubpages.includes(cleanUri)) {
        request.uri = '/documentation' + cleanUri + '.html';
        return request;
    }
    
    // Add .html extension to URIs without file extensions
    if (cleanUri !== "/" && !cleanUri.includes(".")) {
        request.uri = cleanUri + ".html";
    }
    
    return request;
}