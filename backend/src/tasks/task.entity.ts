import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Board } from "../boards/board.entity";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    dueDate: string;

    @Column({ nullable: true })
    priority: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => Board, board => board.tasks)
    @JoinColumn({ name: "boardId" }) 
    board: Board;

    @Column({ nullable: true })
    boardId: number; 
}
