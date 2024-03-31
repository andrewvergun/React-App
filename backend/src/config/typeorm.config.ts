import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "../tasks/task.entity";
import { Board } from "../boards/board.entity"


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'hummer11',
    database: 'taskmanagement',
    entities: [Task, Board],
    synchronize: true,

};