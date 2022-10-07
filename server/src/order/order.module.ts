import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { Order, OrderSchema } from './order.schema'
import { UsersModule } from '../users/users.module'
import { MongooseModule } from '@nestjs/mongoose'



@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema }
    ]),
    UsersModule,
  ]
})
export class OrderModule {}
