import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { JwtService } from '@nestjs/jwt'

import { CreateReviewDto } from './dto/create-review.dto'
import { Review, ReviewDocument } from './review.schema'
import { cache, clearHash } from 'src/services/cache'
import { MailerService } from '../mailer/mailer.service'


@Injectable()
export class ReviewService {

    constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
    private mailerService: MailerService,
    ) { }

    async createReview(reviewDto: CreateReviewDto, productId: string) {
        const review = await this.reviewModel.create({ ...reviewDto, productId })
        await clearHash('', false)
        return review
    }

    async getReviews(productId: string) {
        console.log('productId::', productId)
        const review = await cache(this.reviewModel.find({ productId }))
        return review
    }

}

