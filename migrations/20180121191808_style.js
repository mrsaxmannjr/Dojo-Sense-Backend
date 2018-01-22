exports.up = function(knex, Promise) {
  return knex.schema.createTable("style", table => {
    table.increments("id").primary();
    table.text("style");
    table.string("video");
    table.text("summary");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("style");
};
