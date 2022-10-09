import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { Order, OrderSchema } from './order.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductModule } from '../product/product.module'



@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema }
    ]),
    ProductModule
  ]
})
export class OrderModule {}
