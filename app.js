const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("style")
    .then(style =>
      queries.list("dojo").then(dojo =>
        response.json({
          style,
          dojo,
        })))
    .catch(console.error);
});

app.get("/dojo", (request, response) => {
  queries
    .list("dojo")
    .then(towerDB => {
      response.json({ towerDB });
    })
    .catch(console.error);
});

app.get("/style/:id", (request, response) => {
  queries
    .read(request.params.id, "style")
    .then(style => {
      style ? response.json({ style }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/dojo/:id", (request, response) => {
  queries
    .read(request.params.id, "dojo")
    .then(dojo => {
      dojo ? response.json({ dojo }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/style", (request, response) => {
  queries
    .create(request.body, "style")
    .then(style => {
      response.status(201).json({ style });
    })
    .catch(console.error);
});

app.post("/dojo", (request, response) => {
  queries
    .create(request.body, "dojo")
    .then(dojo => {
      response.status(201).json({ dojo });
    })
    .catch(console.error);
});

app.delete("/style/:id", (request, response) => {
  queries
    .delete(request.params.id, "style")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/dojo/:id", (request, response) => {
  queries
    .delete(request.params.id, "dojo")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/style/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "style")
    .then(style => {
      response.json({ style });
    })
    .catch(console.error);
});

app.put("/dojo/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(dojo => {
      response.json({ dojo });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
