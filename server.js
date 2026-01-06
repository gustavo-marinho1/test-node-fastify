import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
  return "Hi";
});

server.get("/ue", () => {
  return "Ué";
});

server.listen({
  port: 3330,
});