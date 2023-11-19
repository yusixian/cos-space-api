import { PrismaService } from '@/common/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: CreatePostDto): Promise<PostModel> {
    return this.prisma.post.create({
      data,
    });
  }

  async createMultiplePosts(postsData: CreatePostDto[]) {
    return this.prisma.post.createMany({
      data: postsData,
    });
  }

  async getAllPosts(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number): Promise<PostModel | null> {
    return this.prisma.post.findUnique({
      where: {
        id 
      },
    });
  }
  // Add other methods as needed (e.g., updatePost, deletePost, getPosts, etc.)
}
