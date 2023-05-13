/**
 * JST: secure your api 
 * ---------------
 * Create Token
 * ----------------
 * 1. Client: after user login send user basic info to create token
 * 2. in the server side : install npi jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {exprires})
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either httponly cookie or loacalstorage (2nd option localstorage)
 * 7. use a general space onAuthStateChange > authProvider
 * 
 * 
 * ------------------
 * send toke to server
 * ----------------
 * 1. for sensitive api call () send authorization header {authorization " "bearer token"}
 * 
 * --------------------------------
 *      Verify token
 * --------------------------------
 * 1.create a function called verifyJWT (Middleware)
 * 2. this function will have three parameters: req, res, next
 * 3. First check whether the authorization headers exist
 * 4. if not send 401
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token,secret (error, decoded))
 * 7. if error => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 * 10
 * 
 * --------------------------------------------------
 * 1. check wether has the email that matches the request email
 * 
 * 
 * 
 * 
*/