module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://developerdanwu.com/backend'
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '88f3385a11a78420e2eab47cee7a0f2a'),
    },
  },
});
