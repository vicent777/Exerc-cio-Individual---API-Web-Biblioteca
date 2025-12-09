import { Router } from "express";
import { LivroController } from "../controller/LivroController";

const router = Router();
const livroController = new LivroController();

// CRUD - endpoints
router.post("/livros", livroController.create);        // Criar livro
router.get("/livros", livroController.findAll);        // Listar todos
router.get("/livros/:id", livroController.findOne);    // Buscar por ID
router.put("/livros/:id", livroController.update);     // Atualizar livro
router.patch("/livros/:id", livroController.update);   // Atualizar parcialmente
router.delete("/livros/:id", livroController.remove);  // Remover livro

export default router;
