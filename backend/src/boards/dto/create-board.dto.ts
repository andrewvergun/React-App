import { Task } from "src/tasks/task.entity";

export class CreateBoardDto{
    title: string;
    tasks: Task[];
}