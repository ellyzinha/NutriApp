import { Router } from "express";
import UserController from "./controllers/UserController";
import NutritionalTableController from "./controllers/NutritionalTableController";

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/category', NutritionalTableController.getAllCategories);

export default routes;