# node-express-chatapp
Learning Node & Express by building a chat application - following an [O'Reilly course](http://shop.oreilly.com/product/0636920051152.do) and adding my own experiments along with it.

[![CircleCI](https://circleci.com/gh/urbanblight/node-express-chatapp.svg?style=svg)](https://circleci.com/gh/urbanblight/node-express-chatapp?style=shield)

# Getting Started

Unlike the course that I am following, this app is containerized using [Docker](https://www.docker.com). In order to run this on a machine with Docker, execute the following command:

  `docker run -d -p [local port]:3000 urbanblight/node-express-chatapp`

where `[local port]` is the port number on your machine that you would like to map to the port within the container on which the Node application is listening. The application currently listens on port 3000, although I imagine I will make that value configurable at some point.

To verify that the app is working, simply make a request to `[docker machine ip]:[local port]` via CURL or http in a browser, where `[docker machine ip]` is the ip of your Docker machine.
