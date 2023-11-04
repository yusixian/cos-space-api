import { PostStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsEnum } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  coverUrl?: string;

  @IsEnum(PostStatus)
  @IsOptional()
  status?: PostStatus;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  authorId: number;
}

export class PaginationDto {
  @IsInt()
  @IsOptional()
  page?: number;

  // size
  @IsInt()
  @IsOptional()
  size?: number;
}
