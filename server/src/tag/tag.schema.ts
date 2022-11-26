import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'



export type TagDocument = Tag & Document

@Schema()
export class Tag {

  @ApiProperty({ example: 'тег' })
  @Prop({ required: true })
  name: string

}

export const TagSchema = SchemaFactory.createForClass(Tag)

