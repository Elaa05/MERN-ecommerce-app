// http://localhost:5000/api

// /users/

// post, get, put , delete

// https://join.skype.com/JS2KDL5A0Xr2

const express = require("express");

const route = express.Router();

const UserController = require("../controllers/UserConroller");

const isauth = require("../middlewares/isauth");

const isadmin = require("../middlewares/isAdmin");

//create user public route
route.post("/", UserController.createuser);
//get user by id private route
route.get("/:id", isauth, UserController.getuserbyid);
// upadte user by id
route.put("/:id", isauth, UserController.updateuser);
//delete user
route.delete("/:id", isauth, isadmin, UserController.deleteuser);
//get all users
route.get("/", isauth, isadmin, UserController.getallusers);
//authenticate user public route
route.post("/login", UserController.authenticate);

module.exports = route;

// create admin et client => amin etcleint avec password crypted
// authenticate api users/login (admin,client)
//consomer delete user api
