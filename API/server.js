const express = require("express")

// here we will import all of the different databases that we will use 

const server = express();

server.use(express.json());

// we will also make an endpoint that resembles the most basics routes.

module.exports = server