import { Module, forwardRef } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { FilesModule } from './files/files.module'
import { CategoryModule } from './category/category.module'
import { OrderModule } from './order/order.module'
import { TagModule } from './tag/tag.module'

import { S3Module } from 'nestjs-s3'

@Module({
    controllers: [],
    providers: [],
    imports: [
        S3Module.forRoot({
            config: {
                region: process.env.AWS_REGION,
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
          }),
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        MongooseModule.forRoot(process.env.MONGODB_HOST),
        forwardRef(() => AuthModule),
        UsersModule,
        ProductModule,
        FilesModule,
        CategoryModule,
        OrderModule,
        TagModule,
    ]
})
export class AppModule { }







