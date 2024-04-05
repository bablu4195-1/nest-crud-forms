import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crud,CrudSchema } from './crud.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[MongooseModule.forFeature([{ name: Crud.name, schema: CrudSchema }]),
  PassportModule
],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
