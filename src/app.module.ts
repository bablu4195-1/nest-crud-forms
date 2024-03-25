import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CrudModule } from './crud/crud.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://Bablu4195:${process.env.MONGO_PASSWORD}@cluster0.gjjya.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0`),
    CrudModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
