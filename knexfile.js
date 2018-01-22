module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///towerDB"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },
};
