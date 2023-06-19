import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleNewsletter } from './entities/article.entity';
import { PaginationService } from 'src/utils/paginationService';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleNewsletter])],
  controllers: [ArticleController],
  providers: [ArticleService, PaginationService],
})
export class ArticleModule {}
