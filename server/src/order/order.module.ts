import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { Order, OrderSchema } from './order.schema'
import { Product, ProductSchema } from '../product/product.schema'
import { ProductModule } from '../product/product.module'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'
import { MailerModule } from '../mailer/mailer.module'



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
    UsersModule,
    MailerModule
  ]
})
export class OrderModule {}
