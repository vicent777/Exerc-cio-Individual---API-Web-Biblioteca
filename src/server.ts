import express from "express";
import { AppDataSource } from "./config/data-source";
import livroRoutes from "./routes/livro.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

// Inicializar conexão com o banco
AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco inicializada!");

    // Rotas
    app.use("/api", livroRoutes);

    // Start do servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}/api`);
    });
  })
  .catch((error) => console.error("Erro ao inicializar banco:", error));
