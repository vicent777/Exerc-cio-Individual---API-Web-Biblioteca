import { AppDataSource } from "../config/data-source";
import { Livro } from "../entity/Livros";
import { Repository } from "typeorm";

export class LivroRepository {
  private repo: Repository<Livro>;

  constructor() {
    this.repo = AppDataSource.getRepository(Livro);
  }

  // Criar um novo livro
  async createLivro(data: Partial<Livro>): Promise<Livro> {
    const livro = this.repo.create(data);
    return this.repo.save(livro);
  }

  // Buscar todos os livros
  async findAll(): Promise<Livro[]> {
    return this.repo.find();
  }

  // Buscar livro por ID
  async findById(id: number): Promise<Livro | null> {
    return this.repo.findOneBy({ id });
  }

  // Atualizar livro
  async updateLivro(id: number, data: Partial<Livro>): Promise<Livro | null> {
    const livro = await this.repo.findOneBy({ id });
    if (!livro) return null;

    this.repo.merge(livro, data);
    return this.repo.save(livro);
  }

  // Remover livro
  async removeLivro(id: number): Promise<boolean> {
    const livro = await this.repo.findOneBy({ id });
    if (!livro) return false;

    await this.repo.remove(livro);
    return true;
  }
}
