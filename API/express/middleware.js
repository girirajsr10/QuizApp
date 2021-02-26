function myMiddleware (req, res, next) {
    if (req.method === 'GET') { 
      // Do some code
    }
 
    // keep executing the router middleware
    next()
 }