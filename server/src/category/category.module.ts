import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { Category, CategorySchema } from '../category/category.schema'
import { AuthModule } from '../auth/auth.module'



@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema }
    ]),
    AuthModule
  ],
  exports: [CategoryService]
})
export class CategoryModule { }


