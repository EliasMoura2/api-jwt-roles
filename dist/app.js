"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// initializations
var app = (0, _express["default"])(); // middlewares

app.use(_express["default"].json()); //routes

module.exports = app;