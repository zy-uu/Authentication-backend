# 1.What is Middleware ? 
It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

# 2. When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object) .You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

# 3. What is express.json()
Express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());


# 4. What is express.urlencoded()
Express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

# 5. What is the difference between  express.urlencoded({extended: false}) and express.json()" ?
The difference is express.json() is a body parser for post request except html post form and express.urlencoded({extended: false}) is a body parser for html post form

# 6. Some other info helping you understand it deeply
Express.json() is a built express middleware that convert request body to JSON.

Express.urlencoded() just like express.json() converts request body to JSON, it also carries out some other functionalities like: converting form-data to JSON etc.