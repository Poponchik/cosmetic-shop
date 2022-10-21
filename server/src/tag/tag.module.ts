import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TagController } from './tag.controller'
import { TagService } from './tag.service'
import { Tag, TagSchema } from './tag.schema'
import { AuthModule } from '../auth/auth.module'



@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [
    MongooseModule.forFeature([
      { name: Tag.name, schema: TagSchema }
    ]),
    AuthModule
  ],
  exports: [TagService]
})
export class TagModule { }


