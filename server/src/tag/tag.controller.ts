import { Body, Controller, Post, Get, Delete, Param, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { TagService } from './tag.service'
import { Tag } from './tag.schema'
import { CreateTagDto } from './dto/create-tag.dto'
import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { Role } from '../shared/index'


@ApiTags('Теги')
@Controller('tag')
export class TagController {

    constructor(private tagService: TagService) { }


    @ApiOperation({ summary: 'Добавить теги' })
    @ApiResponse({ status: 200, type: Tag })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/createTags/')
    createTag(@Body() TagDto: CreateTagDto) {
        return this.tagService.createTag(TagDto)
    }

    @ApiOperation({ summary: 'Получить все теги' })
    @ApiResponse({ status: 200, type: [Tag] })
    @Get('/tagAll/')
    getAllTags() {
        return this.tagService.getAllTags()
    }


    @ApiOperation({ summary: 'Удалить тег по id' })
    @ApiResponse({ status: 200, type: Tag })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Delete('/deleteTag/:id')
    deleteTag(@Param('id') id: string) {
        return this.tagService.deleteTag(id)
    }

    @ApiOperation({ summary: 'изменить тег по id' })
    @ApiResponse({ status: 200, type: Tag })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/changeTag/:id')
    changeTag(
        @Body() TagDto: CreateTagDto,
        @Param('id') id: string) {
        return this.tagService.changeTag(TagDto, id)
    }
}
