import express from "express";
import http from "http";
import dbConfig from "@config/db.config";
import { Hello } from "@utils/function.utils";

const app = express();

const server = http.createServer(app);

Hello(5);

server.listen(dbConfig.PORT, () => {
  console.log(`Server running on ${dbConfig.PORT}`);
});
