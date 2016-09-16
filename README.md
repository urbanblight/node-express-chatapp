# node-express-chatapp
Learning Node & Express by building a chat application - following an [O'Reilly 
course](http://shop.oreilly.com/product/0636920051152.do) and adding my own 
experiments along with it.

[![CircleCI]
(https://circleci.com/gh/urbanblight/node-express-chatapp.svg?style=svg)]
(https://circleci.com/gh/urbanblight/node-express-chatapp?style=shield)

# Getting Started

Unlike the course that I am following, this app is containerized using [Docker]
(https://www.docker.com). In order to run this on a machine with Docker, execute
the following command:

  `docker run -d -p [local port]:3000 urbanblight/node-express-chatapp`

where `[local port]` is the port number on your machine that you would like to 
map to the port within the container on which the Node application is listening.
The application currently listens on port 3000, although I imagine I will make 
that value configurable at some point.

To verify that the app is working, simply make a request to 
`[docker machine ip]:[local port]` via CURL or http in a browser, where 
`[docker machine ip]` is the ip of your Docker machine.

# Dependencies

## Node

A JavaScript runtime environment. Learn more [here]
(https://nodejs.org/).

## Express

A server framework for Node web applications. Learn more [here]
(http://expressjs.com).

## Bootstrap

A front-end framework for web app design. Learn more [here]
(http://getbootstrap.com).

## Pug

A view engine for Node. Learn more [here](https://pugjs.org).

### Jade -> Pug v2

It seems that this course was created after [Jade's move to Pug]
(https://github.com/pugjs/pug#rename-from-jade), but the course doesn't account 
for it. Therefore, I have used [Express' instructions on implementing Pug]
(https://expressjs.com/en/guide/using-template-engines.html).

#### Pug v2

I am going through this course at the time that Pug 2 was released, which
changes some syntax. See [the full migration guide]
(https://pugjs.org/api/migration-v2.html) for details.

* [Attribute Interpolation]
(https://pugjs.org/api/migration-v2.html#attribute-interpolation)

## body-parser

Body parsing middleware for Node. Learn more [here]
(https://www.npmjs.com/package/body-parser).

## lodash

Utility function library. Learn more [here](https://lodash.com/).

## node-uuid

Generates unique identifiers. Learn more [here]
(https://www.npmjs.com/package/node-uuid).

## jQuery

Javascript library for DOM manipulation, Ajax, event-handling, animation and 
more. Learn more [here](http://jquery.com/).

## express-debug

Debugging toolbar for express. Learn more [here]
(https://www.npmjs.com/package/express-debug).

