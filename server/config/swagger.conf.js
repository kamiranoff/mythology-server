import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export default class SwaggerConfig {
  static init(application) {
    // SWAGGER
    const options = {
      swaggerDefinition: {
        info: {
          title: 'Greek Mythology Api', // Title (required)
          version: '1.0.0', // Version (required)
        },
        basePath: '/api'
      },
      apis: [__dirname + '/api/mythology/mythology-swagger.yaml'], // Path to the API docs
    };

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
    const swaggerSpec = swaggerJSDoc(options);
    application.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, true));
// END SWAGGER
  }
}