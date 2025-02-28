import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./_config/swagger";
import { usersRouter } from "./users/router/users.routes"
import { AuthRouter } from "./auth/router/auth.routes"
import cors from "cors";
import 'dotenv/config'
import { startDatabase } from "./start";
const app = express();
const PORT = Number(process.env.PORT) || 3000;



const startServer = async () => {
  try {
    startDatabase()

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    app.use(cors({
      origin: ["http://localhost:3000"],
      methods: ["*"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true
    }))
    app.use(express.json()); //body json
    app.use(express.urlencoded({ extended: true })); // import files 

    app.use("/api/auth", AuthRouter)
    app.use("/api/users", usersRouter)

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log(`Swagger disponível em http://localhost:${PORT}/swagger`);
    });

  } catch (error) {
    console.error("Error starting the app", error);
  }
};

startServer();
