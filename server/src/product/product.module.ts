import { forwardRef, Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { Product, ProductSchema } from '../product/product.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { FilesModule } from '../files/files.module'
import { UsersModule } from '../users/users.module'








@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema }
    ]),
    forwardRef(() => UsersModule),
    FilesModule
  ],
})
export class ProductModule {}
