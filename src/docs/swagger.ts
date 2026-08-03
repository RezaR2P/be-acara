import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v0.0.1',
    title: 'Dokumentasi API Acara',
    description: 'Dokumentasi API Acara',
  },
  servers: [
    { url: 'http://localhost:3000/api', description: 'Local Server' },
    {
      url: 'https://be-acara-blue.vercel.app/api',
      description: 'Deploy Server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      LoginRequest: {
        identifier: 'eaza',
        password: 'tes123',
      },
    },
  },
};

const outputFile = './swagger_output.json';
const endPointsFiles = ['../routes/api.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endPointsFiles, doc);
