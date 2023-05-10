
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: 'eu-central-1',
          params: {
            ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
            // Bucket: 'strapiuploaddemo996',
            Bucket: 'food-blog-v001-image-bucket',
          },
        },
      },
    },
    // ...
  });

// module.exports = ({ env })=>({
//     upload: {
//       providerOptions: {
//         localServer: {
//           maxage: 300000
//         }
//       }
//     }
//   });
  
  
  
  
  
  
  
  
//     module.exports = ({ env }) => ({
//       upload: {
//         provider: 'aws-s3',
  
//         providerOptions: {
//           accessKeyId: env('AWS_ACCESS_KEY_ID'),
//           secretAccessKey: env('AWS_ACCESS_SECRET'),
//           region: 'eu-central-1',
//           params: {
//             Bucket: 'strapiuploaddemo996',
//           },
//         },
//       },
//     });
  
  