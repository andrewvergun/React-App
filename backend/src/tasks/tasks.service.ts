import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { BoardRepository } from 'src/boards/board.repository';
import { Board } from 'src/boards/board.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
      ) {}
    
      async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
      }

    async findById(id: number): Promise<Task>{
        
        return await this.taskRepository.findOne({where:{id}});
    }


    async create(createTaskDto: CreateTaskDto): Promise<Task> {
      const task = this.taskRepository.create(createTaskDto);
      return this.taskRepository.save(task);

   }

    async delete(id: number): Promise<void>{
        const result = await this.taskRepository.delete(id);
        console.log(result);
    }

    async updateTaskStatus(id: number, newStatus: string): Promise<Task> {
      const task = await this.findById(id);
      task.status = newStatus;
      await this.taskRepository.save(task);
      return task;
    }


}
