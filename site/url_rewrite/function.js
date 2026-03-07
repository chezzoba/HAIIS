function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check the URI
    if (uri !== "/" && !uri.includes(".")) {
        // Remove trailing slash if present
        if (uri.endsWith("/"))
            uri = uri.slice(0, -1);
        
        // Add ".html" to the URI
        request.uri = uri + ".html";
    }
    
    return request;
}