import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { BoardService } from '../boards/boards.service';
import { BoardRepository } from '../boards/board.repository'; 
import { BoardsModule } from '../boards/boards.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
    BoardsModule,
  ],
  controllers: [TasksController],
  providers: [TasksService, BoardService, BoardRepository],
  exports: [TasksService],
})
export class TasksModule {}

