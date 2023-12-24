import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './schemas/posts.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('getall')
  async findAll(): Promise<Posts[]> {
    return await this.postsService.findAll();
  }

  @Get('getbyid:id')
  async findOne(@Param('_id') id: string): Promise<Posts> {
    return await this.postsService.findOne(id);
  }

  @Post('create')
  async create(@Body() post: Posts): Promise<Posts> {
    return await this.postsService.create(post);
  }

  @Put('edit:id')
  async update(@Param('_id') id: string, @Body() post: Posts): Promise<Posts> {
    return await this.postsService.update(id, post);
  }

  @Delete('del:id')
  async delete(@Param('_id') id: string): Promise<Posts> {
    return await this.postsService.delete(id);
  }
}