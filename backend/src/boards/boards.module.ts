import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardService } from './boards.service';
import { BoardController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { TasksService } from '../tasks/tasks.service'; // Import TasksService
import { TaskRepository } from '../tasks/task.repository'; // Import TaskRepository

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository, TaskRepository]), // Import TaskRepository as well
  ],
  controllers: [BoardController],
  providers: [BoardService, TasksService], // Remove TaskRepository from providers
  exports: [BoardService],
})
export class BoardsModule {}

