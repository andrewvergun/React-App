import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.status.enum';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor (private tasksService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> 
    {
            return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number):Promise<Task>
    {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto):Promise<Task>
    {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id/card')
    updateCard(
      @Param('id', ParseIntPipe) id: number,
      @Body('status', TaskStatusValidationPipe) status: string,
      @Body('title') title: string,
      @Body('dueDate') dueDate: string,
      @Body('priority') priority: string,
      @Body('description') description: string,
    ): Promise<Task> {
      return this.tasksService.updateCard(id, status, title, dueDate, priority, description);
    }
}
