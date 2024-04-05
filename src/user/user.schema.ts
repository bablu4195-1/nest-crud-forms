import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    @Prop({required: true, maxlength: 26})
    username: string;

    @Prop({required: true, minlength: 8})
    password: string;

    @Prop({required: true, unique: true, validate: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')})
    email:string;

    @Prop({required: true})
    age:number;
}

export const UserSchema = SchemaFactory.createForClass(User)