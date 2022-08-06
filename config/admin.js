module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6092654e473e49f35f522bfa5f43093'),
  },
});
