"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_service_1 = __importDefault(require("../service/users.service"));
const router = (0, express_1.Router)();
router.post('/register', (req, res) => {
    let user = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
    };
    users_service_1.default.create(user);
    res.json({
        message: 'Register successful!',
    });
});
