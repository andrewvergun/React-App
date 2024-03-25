import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "src/tasks/task.entity";
import { TaskRepository } from "src/tasks/task.repository";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'hummer11',
    database: 'taskmanagement',
    entities: [Task],
    synchronize: true,

};