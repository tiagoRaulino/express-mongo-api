import express from "express";
import transferKeys from "./transferKeysRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), transferKeys);
};

export default routes;
