import {
  PaginationResult,
  PaginationService,
  QueryOptions,
} from 'src/utils/paginationService';
import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleNewsletter } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  @InjectRepository(ArticleNewsletter)
  private readonly articleNewsletterRepository: Repository<ArticleNewsletter>;
  @Inject(PaginationService)
  private readonly paginationService: PaginationService;
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.articleNewsletterRepository.find();
  }

  async findWithPagination(
    page: number,
    limit: number,
    options?: QueryOptions,
  ): Promise<PaginationResult<ArticleNewsletter>> {
    const queryBuilder = this.paginationService.createQueryBuilder(
      this.articleNewsletterRepository,
      options,
    );
    return this.paginationService.paginate(queryBuilder, page, limit);
  }

  findOne(id: number) {
    return this.articleNewsletterRepository.findBy({ id: id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
