import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
 } from "typeorm";
import Users from "./users";

@Entity('receipt')
export default class Receipt {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column({ length: '200' })
    url_comprovante: string;

    @Column()
    value: number;

    @Column()
    date_of_payment: Date;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'id_user' })
    users: Users;
}