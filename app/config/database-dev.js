const parse = require('pg-connection-string').parse;
const config = parse('postgres://strapi:strapi@localhost:5432/');

module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'db',
        port: 5432,
        database: 'strapi',
        username: 'strapi',
        password: 'strapi',
      },
      options: {},
    },
  },
});
