import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crud,CrudSchema } from './crud.model';

@Module({
  imports:[MongooseModule.forFeature([{ name: Crud.name, schema: CrudSchema }])],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
