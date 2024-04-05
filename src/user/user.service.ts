import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>){}
  create(createUserDto: CreateUserDto) {
    const user = new this.UserModel(createUserDto)
    //hash the password
    user.password = bcrypt.hashSync(user.password, 10);
    return user.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(username:string) {
   return this.UserModel.findOne({username: username});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


}
