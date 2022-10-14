import { forwardRef, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { Product, ProductSchema } from '../product/product.schema'
import { FilesModule } from '../files/files.module'
import { UsersModule } from '../users/users.module'
import { AuthModule } from '../auth/auth.module'








@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema }
    ]),
    forwardRef(() => UsersModule),
    FilesModule,
    AuthModule
  ],
  exports: [ProductService]
})
export class ProductModule {}
