const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/towerDB", (request, response) => {
  queries
    .list()
    .then(towerDB => {
      response.json({ towerDB });
    })
    .catch(console.error);
});

app.get("/towerDB/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(style => {
      style ? response.json({ style }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/towerDB/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(dojo => {
      dojo ? response.json({ dojo }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/towerDB", (request, response) => {
  queries
    .create(request.body)
    .then(style => {
      response.status(201).json({ style });
    })
    .catch(console.error);
});

app.post("/towerDB", (request, response) => {
  queries
    .create(request.body)
    .then(dojo => {
      response.status(201).json({ dojo });
    })
    .catch(console.error);
});

app.delete("/towerDB/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/towerDB/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(style => {
      response.json({ style });
    })
    .catch(console.error);
});

app.put("/towerDB/:id", (request, response) => {
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
