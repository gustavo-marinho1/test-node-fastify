import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();


server.get("/videos", (req, res) => {
  const search = req.query.search;

  const list = database.list(search);

  return res.status(200).send(list);
});


server.post("/videos", (req, res) => {
  const { title, description, duration } = req.body;

  database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return res.status(201).send();
});


server.put("/videos/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, duration } = req.body;

  database.update(id, {
    title: title,
    description: description,
    duration: duration,
  });

  return res.status(204).send();
});


server.delete("/videos/:id", (req, res) => {
  const id = req.params.id;

  database.delete(id);

  return res.status(204).send();
});


server.listen({
  port: 3330,
});