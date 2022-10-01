import { forwardRef, Module } from '@nestjs/common'
import { CaterogyController } from './category.controller'
import { CaterogyService } from './category.service'
import { Caterogy, CaterogySchema } from '../category/category.schema'
import { MongooseModule } from '@nestjs/mongoose'

import { ProductModule } from '../product/product.module'


@Module({
  controllers: [CaterogyController],
  providers: [CaterogyService],
  imports: [
    MongooseModule.forFeature([
      { name: Caterogy.name, schema: CaterogySchema }
    ]),
    // forwardRef(() => ProductModule)
    // ProductModule

  ],
  exports: [CaterogyService]
})
export class CaterogyModule { }












