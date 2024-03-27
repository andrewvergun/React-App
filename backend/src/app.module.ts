import { Module, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CorsMiddleware } from './middleware/cors.middleware';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    
  ],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes(
      { path: 'tasks', method: RequestMethod.ALL },
    );
  }
}
