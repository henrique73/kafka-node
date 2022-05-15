import express from "express";
import UsersService from "../services/userService";
import { success, fail } from "../utils/response-helpers";
import { createValidator } from 'express-joi-validation'
import userCreationSchema from "../utils/joi/user-creation";
const validator = createValidator()

const producerRoutes = express.Router();
const usersService = new UsersService();

producerRoutes.post("/user", validator.body(userCreationSchema), async (req, res) => {
    try {
        res.json(
            success("Registration successful", await usersService.userRegistration(req.body.username, req.body.password, req.body.email))
        );
    } catch (ex) {
        res.json(fail("Registration Failed", ex));
    }
});

export default producerRoutes;
