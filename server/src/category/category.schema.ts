import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'



export type CategoryDocument = Category & Document

@Schema()
export class Category {

  @ApiProperty({ example: 'название категории', description: 'крем' })
  @Prop({ required: true })
  name: string

}

export const CategorySchema = SchemaFactory.createForClass(Category)

