import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud } from './crud.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CrudService {
  constructor(@InjectModel(Crud.name) private CrudModel: Model<Crud> ) {}
  create(createCrudDto: CreateCrudDto) {
    // return 'This action adds a new crud';
    const createdCrud = new this.CrudModel(createCrudDto);
    return createdCrud.save();
  }

  findAll() {
    //return all the docs
    return this.CrudModel.find().exec();
  }

  findOne(id: string) {
    return this.CrudModel.findById(id);
  }

  update(id: string, updateCrudDto: UpdateCrudDto) {
   const crud = this.CrudModel.findByIdAndUpdate(id,updateCrudDto);
   return crud;
  }

  remove(id: string) {
    return this.CrudModel.findByIdAndDelete(id);
  }
}
