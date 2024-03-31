import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.status.enum';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor (private tasksService: TasksService) {}

    @Get()
    async findAll(): Promise<Task[]> 
    {
            return this.tasksService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id', ParseIntPipe) id: number):Promise<Task>
    {
        return this.tasksService.findById(id);
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto):Promise<Task>
    {
        return this.tasksService.create(createTaskDto);
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.tasksService.delete(id);
    }

    @Put(':id/status')
    updateTaskStatus(@Param('id') id: number, @Body('status') newStatus: string) {
      return this.tasksService.updateTaskStatus(id, newStatus);
    }



}
