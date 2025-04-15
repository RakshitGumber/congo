import express from "express";
import { router } from "@/routes";
import bodyParser from "body-parser";

const server = express();

server.use(express.json());
server.use(bodyParser.json());

server.use(router);

export { server };
