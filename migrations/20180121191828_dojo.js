exports.up = function(knex, Promise) {
  return knex.schema.createTable("dojo", table => {
    table.increments("id").primary();
    table.text("dojo");
    table.text("style");
    table.string("url");
    table.float("latitude");
    table.float("longitude");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dojo");
};
