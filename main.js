const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
  });

  // --------------------------------
  // route --------------------------
  // --------------------------------
  server.route({
    method: 'GET',
    path: '/search',
    handler: (req, h) => {
      return 'Search Result';
    }
  })

  await server.start();
  console.log('Server running on port 3000');
};

init();