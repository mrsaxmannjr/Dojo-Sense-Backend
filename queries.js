const database = require("./database-connection");

module.exports = {
  list() {
    return database("dojo").select();
  },
  read(id) {
    return database("dojo")
      .select()
      .where("id", id)
      .first();
  },
  create(dojo) {
    return database("dojo")
      .insert(dojo)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, dojo) {
    return database("dojo")
      .update(dojo)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("dojo")
      .delete()
      .where("id", id);
  }
};
