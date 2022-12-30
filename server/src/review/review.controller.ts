import { Body, Controller, Post, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { CreateReviewDto } from './dto/create-review.dto'
import { ReviewService } from '../review/review.service'
import { Review } from './review.schema'


@ApiTags('Отзывы')
@Controller('review')
export class ReviewController {

    constructor(private reviewService: ReviewService) { }

    @ApiOperation({ summary: 'Добавить отзыв' })
    @ApiResponse({ status: 200, type: Review })
    @Post('/createReview/:productId')
    createReview(
        @Body() reviewDto: CreateReviewDto,
        @Param('productId') productId: string) {
        return this.reviewService.createReview(reviewDto, productId)
    }

    @ApiOperation({ summary: 'получить отзывы по id продукта' })
    @ApiResponse({ status: 200, type: Review })
    @Get('/getReview/:productId')
    getReviews(
        @Param('productId') productId: string) {
        return this.reviewService.getReviews(productId)
    }
}
