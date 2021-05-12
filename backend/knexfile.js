// Update with your config settings.
module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "tesouraria",
      user: "root",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
