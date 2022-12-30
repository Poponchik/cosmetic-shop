import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { Review, ReviewSchema } from './review.schema'
import { MailerModule } from '../mailer/mailer.module'



@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [
    MongooseModule.forFeature([
      { name: Review.name, schema: ReviewSchema },
    ]),
    MailerModule
  ]
})
export class ReviewModule {}
