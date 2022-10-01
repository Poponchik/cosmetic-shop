import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import * as mongoose from 'mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger"

export type CaterogyDocument = Caterogy & Document;

@Schema()
export class Caterogy {

  @ApiProperty({ example: 'название категории', description: 'крем' })
  @Prop({ required: true })
  name: string

}

export const CaterogySchema = SchemaFactory.createForClass(Caterogy)

