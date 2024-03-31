import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity('')
export class Board extends BaseEntity{

  @PrimaryGeneratedColumn()
  boardId: number;

  @Column()
  title: string;

  @OneToMany(() => Task, task => task.board)
  tasks: Task[];
}