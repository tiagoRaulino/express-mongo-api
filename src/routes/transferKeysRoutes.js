import express from "express";
import transferKeyController from "../controllers/transferKeysController.js";

const routes = express.Router();

routes.get("/transferKeys", transferKeyController.listarTransferKeys);
routes.get("/transferKeys/:id", transferKeyController.listarTransferKeyPorId);
routes.post("/transferKeys", transferKeyController.cadastrarTransferKey);
routes.put("/transferKeys/:id", transferKeyController.atualizarTransferKey);
routes.delete("/transferKeys/:id", transferKeyController.excluirTransferKey);

export default routes;
