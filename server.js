import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DatabasePostgres();

server.get("/videos", async (req, res) => {
  const search = req.query.search;

  const list = await database.list(search);

  return res.status(200).send(list);
});


server.post("/videos", async (req, res) => {
  const { title, description, duration } = req.body;

  await database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return res.status(201).send();
});


server.put("/videos/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, duration } = req.body;

  await database.update(id, {
    title: title,
    description: description,
    duration: duration,
  });

  return res.status(204).send();
});


server.delete("/videos/:id", async (req, res) => {
  const id = req.params.id;

  await database.delete(id);

  return res.status(204).send();
});


server.listen({
  port: 3330,
});