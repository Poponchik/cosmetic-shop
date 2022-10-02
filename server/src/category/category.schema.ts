import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import * as mongoose from 'mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger"

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  @ApiProperty({ example: 'название категории', description: 'крем' })
  @Prop({ required: true })
  name: string

}

export const CategorySchema = SchemaFactory.createForClass(Category)

