import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService,) {}

  @Post()
  create(@Body() createCrudDto: CreateCrudDto) {
    console.log("called and save",createCrudDto);
    return this.crudService.create(createCrudDto);
    //error
  }

  @Get()
  findAll() {
    return this.crudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateCrudDto) {
    return this.crudService.update(id, updateCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudService.remove(id);
  }

}
