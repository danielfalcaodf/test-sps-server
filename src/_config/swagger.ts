import swaggerJsdoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Teste SPS",
      version: "1.0.0",

      description: 'Esta é uma API autenticação e gerenciamento de usuários.',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/**/**routes*.ts"], // Caminho onde ficam suas rotas
};

export default swaggerOptions;
