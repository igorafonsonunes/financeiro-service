import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class Users{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:'100' })
    name: string;

    @Column({length:'100' })
    senha_hash: string;

    @Column({length:'100' })
    email: string;
}