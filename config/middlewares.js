    // ~/strapi-aws-s3/backend/config/middlewares.js
    
    module.exports = [
      'strapi::errors',
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com', // change here
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                'food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com', // change here
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ];