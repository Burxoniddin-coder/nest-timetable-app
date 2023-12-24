import { PostsService } from './posts.service';
import { Posts } from './schemas/posts.schema';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<Posts[]>;
    findOne(id: string): Promise<Posts>;
    create(post: Posts): Promise<Posts>;
    update(id: string, post: Posts): Promise<Posts>;
    delete(id: string): Promise<Posts>;
}
