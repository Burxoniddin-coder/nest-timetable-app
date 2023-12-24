import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from './schemas/posts.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) {}

  async findAll(): Promise<Posts[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Posts> {
    return await this.postModel.findById(id).exec();
  }

  async create(post: Posts): Promise<Posts> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async update(id: string, post: Posts): Promise<Posts> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(id: string): Promise<Posts> {
    return await this.postModel.findByIdAndRemove(id);
  }
}