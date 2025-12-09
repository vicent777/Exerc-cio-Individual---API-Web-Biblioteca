import { Request, Response } from "express";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController {
  private livroRepo: LivroRepository;

  constructor() {
    this.livroRepo = new LivroRepository();
  }

  // Criar novo livro
  create = async (req: Request, res: Response) => {
    try {
      const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;

      if (!titulo || !autor || !isbn || !anoPublicacao) {
        return res.status(400).json({ message: "Campos obrigatórios faltando!" });
      }

      const livro = await this.livroRepo.createLivro({
        titulo,
        autor,
        isbn,
        anoPublicacao,
        disponivel,
      });

      return res.status(201).json(livro);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar livro", error });
    }
  };

  // Listar todos os livros
  findAll = async (_req: Request, res: Response) => {
    try {
      const livros = await this.livroRepo.findAll();
      return res.json(livros);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar livros", error });
    }
  };

  // Buscar livro por ID
  findOne = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const livro = await this.livroRepo.findById(Number(id));

      if (!livro) return res.status(404).json({ message: "Livro não encontrado" });

      return res.json(livro);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar livro", error });
    }
  };

  // Atualizar livro
  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const livroAtualizado = await this.livroRepo.updateLivro(Number(id), req.body);

      if (!livroAtualizado)
        return res.status(404).json({ message: "Livro não encontrado" });

      return res.json(livroAtualizado);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar livro", error });
    }
  };

  // Deletar livro
  remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const removido = await this.livroRepo.removeLivro(Number(id));

      if (!removido) return res.status(404).json({ message: "Livro não encontrado" });

      return res.json({ message: "Livro removido com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover livro", error });
    }
  };
}
