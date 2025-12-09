import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("livros")
export class Livro {
@PrimaryGeneratedColumn()
id!: number;


@Column({ length: 255 })
titulo!: string;


@Column({ length: 255 })
autor!: string;


@Column({ unique: true, length: 20 })
isbn!: string;


@Column()
anoPublicacao!: number;


@Column({ default: true })
disponivel!: boolean;
}