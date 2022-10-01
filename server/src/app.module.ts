import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { FilesModule } from './files/files.module'
import { CaterogyModule } from './category/category.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'



@Module({
    controllers: [],
    providers: [],
    imports: [
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
        CaterogyModule

    ],
})
export class AppModule { }







