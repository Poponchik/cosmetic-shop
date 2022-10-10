import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { Order, OrderSchema } from './order.schema'
import { Product, ProductSchema } from '../product/product.schema'

import { MongooseModule } from '@nestjs/mongoose'

import { ProductModule } from '../product/product.module'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'



@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Product.name, schema: ProductSchema }
    ]),
    ProductModule,
    AuthModule,
    UsersModule
  ]
})
export class OrderModule {}
