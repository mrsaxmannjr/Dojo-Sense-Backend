const database = require("./database-connection");

module.exports = {
  list() {
    return database("style").select();
  },
  read(id) {
    return database("style")
      .select()
      .where("id", id)
      .first();
  },
  create(style) {
    return database("style")
      .insert(style)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, style) {
    return database("style")
      .update(style)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("style")
      .delete()
      .where("id", id);
  }
};
