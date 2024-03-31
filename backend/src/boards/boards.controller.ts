import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BoardService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.create(createBoardDto.title, createBoardDto.tasks);
  }



  @Get(':boardId')
  async findOne(@Param('boardId') id: string) {
    return this.boardService.findOne(+id);
  }

  @Delete(':boardId')
  async delete(@Param('boardId') id: number): Promise<void> {
    return this.boardService.delete(id);
  }
}