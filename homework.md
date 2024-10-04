- create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- create a server
- Listen to port 7777
- Write request handlers
- Install nodemon and update the scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilda (^ vs ~)



- initialize git
- .gitignore
- cCreate a remote repo on github
- Push all code to remote origin



- Play with routes and route extensions ex. /hello, /, /hello/3, /xyz
- Order of the routes matter a lot


 
- Install postman app and make a workspace/collection > test API call
- write logic to handle GET,POST,DELETE,PATCH PAI calls and test them on Postman


- Explore routing and use of ?, +, *, () in the routes
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes


- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5);/


- What is middleware
- How express.js basically handles the requests behind the scenes 
- Difference between app.use vs app.all 
- Write a dummy middleware for admin
- Write a dummy middleware for user routes, except /user/login

- Error handling using app.use("/", (err, req, res, next) = {});