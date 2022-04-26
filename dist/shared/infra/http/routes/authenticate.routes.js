"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRoutes = void 0;

var _authenticateUserController = require("../../../../modules/users/useCases/AuthenticateUser/authenticateUserController");

var _express = require("express");

const authenticateRoutes = (0, _express.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateUserController = new _authenticateUserController.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);