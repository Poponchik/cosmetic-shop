import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { FilesModule } from './files/files.module'
import { CategoryModule } from './category/category.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { OrderModule } from './order/order.module';
import * as path from 'path'



@Module({
    controllers: [],
    providers: [],
    imports: [
        forwardRef(() => AuthModule),
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(process.env.MONGODB_HOST),
        UsersModule,
        AuthModule,
        ProductModule,
        FilesModule,
        CategoryModule,
        OrderModule
    ],
})
export class AppModule { }







