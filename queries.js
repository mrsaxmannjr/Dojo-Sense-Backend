const database = require("./database-connection");

module.exports = {
  list(path) {
    return database(path).select();
  },
  list2(path) {
    return database(path).select();
  },
  read(id, path) {
    return database(path)
      .select()
      .where("id", id)
      .first();
  },
  create(body, path) {
    return database(path)
      .insert(body)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, body, path) {
    return database(path)
      .update(body)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id, path) {
    return database(path)
      .delete()
      .where("id", id);
  }
};
