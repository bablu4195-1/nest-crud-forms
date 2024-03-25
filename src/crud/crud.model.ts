// user.model.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Crud extends Document {
  @Prop({ required: true, maxlength: 100 })
  name: string;

  @Prop({ required: true })
  email: string;

  // Other properties as needed
  @Prop()
  age: number;

  @Prop({maxlength: 100})
  address: string;

  @Prop({ required: true, maxlength: 14})
  phone: number;

}

export const CrudSchema = SchemaFactory.createForClass(Crud);
