import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

// Routes for managing users
routes.get("/users", UserController.listarUsuarios);
routes.get("/users/:id", UserController.listarUsuarioPorId);
routes.post("/users", UserController.cadastrarUsuario);
routes.put("/users/:id", UserController.atualizarUsuario);
routes.delete("/users/:id", UserController.excluirUsuario);

export default routes;
