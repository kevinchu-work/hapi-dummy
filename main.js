const Hapi = require('@hapi/hapi');
// const Joi = require('@hapi/joi');

const init = async () => {

  const HapiListeningPort = 3000,
        HapiListeningAddr = '0.0.0.0';

  const server = Hapi.server({
    port: HapiListeningPort,
    host: HapiListeningAddr
  });

  // --------------------------------
  // route --------------------------
  // --------------------------------
  let routes = [];
  
  // Search
  routes.push({
    path: '/search',
    method: ['POST', 'GET'],
    handler: (req, h) => {

      let params = (req.method === "get") ? req.query : req.payload;
      console.log(`Search by ${req.method}: ${params.q}`);

      return { keyword: params.q }

    },
    // Validation - Joi
    // for POST method only
    //
    // options: {
    //   auth: false,
    //   validate: {
    //     payload: Joi.object({
    //       q: Joi.string().min(3).max(8)
    //     })
    //   }
    // }
  })


  // --------------------------------
  // Wrap it up -----------------------
  // --------------------------------
  server.route(routes);

  await server.start();
  console.log(`Server running on port ${HapiListeningPort}`);
};

init();