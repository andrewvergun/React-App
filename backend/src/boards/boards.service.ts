import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { Task } from 'src/tasks/task.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async create(title: string, tasks: Task[]): Promise<Board> {
    const board = new Board();
    board.title = title;
    board.tasks = tasks;

    return this.boardRepository.save(board);
    
  }



  async findOne(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id, { relations: ['tasks'] });
    if (!board) {
      throw new NotFoundException(`Board with ID "${id}" not found`);
    }
    return board;
  }

  async delete(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }
}