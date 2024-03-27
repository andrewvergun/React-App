import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task.status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
      ) {}
    
      async getAllTasks(): Promise<Task[]> {
        return this.taskRepository.find();
      }
      // getAllTasks(): Task[] {
      //   return this.tasks;
      // }
    
    // async getAllTasks(): Promise <Task[]>{
    //     return this.tasks;
    // }

    async getTaskById(id: number): Promise<Task>{
        const found = await this.taskRepository.findOne({where:{id}});

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
          }

        return found;
    }


    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        const {title, description, dueDate, priority, status} = createTaskDto;
        
        const task = new Task();
        task.title = title;
        task.description = description;
        task.status = status;
        task.dueDate = dueDate;
        task.priority = priority;
        await task.save();
        
        return task;

    
    }

    async deleteTask(id: number): Promise<void>{
        const result = await this.taskRepository.delete(id);
        console.log(result);
    }

    async updateCard(
        id: number,
        status: string,
        title: string,
        dueDate: string,
        priority: string,
        description: string,
        
      ): Promise<Task> {
        const task = await this.getTaskById(id);
    
        task.status = status;
        task.title = title;
        task.dueDate = dueDate;
        task.priority = priority;
        task.description = description;
        await task.save();
    
        return task;
      }
      private tasks: Task[] = []; // Assuming you have tasks stored somewhere

      async updateTaskStatus(id: number, newStatus: string): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = newStatus;
        await this.taskRepository.save(task);
        return task;
      }


}
