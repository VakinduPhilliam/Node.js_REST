# Simple Node with Express + PostgreSQL Server





An easy way to get started with a Express server with PostgreSQL with Node.js. 



## Features

* Babel 7
* Environment Variables
* Express
* REST API
* PostgreSQL


### GET Routes

* visit http://localhost:3000
  * /messages
  * /messages/1
  * /users
  * /users/1


### Beyond GET Routes


#### CURL

* Create a message with:
  * `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`


* Delete a message with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`



#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API


* Create a message with:
  * URL: http://localhost:3000/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  
* Body Content: `{ "text": "Hi again, World" }`
* Delete a message with:
  * URL: http://localhost:3000/messages/1
  * Method: DELETE
