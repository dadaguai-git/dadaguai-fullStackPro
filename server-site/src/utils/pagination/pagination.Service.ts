import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  isEnd: boolean;
}

export interface QueryOptions {
  search?: string;
  searchFields?: string[];
  orderBy?: string;
  order?: 'ASC' | 'DESC';
}

@Injectable()
export class PaginationService {
  createQueryBuilder<T>(
    repository: Repository<T>,
    options?: QueryOptions,
  ): SelectQueryBuilder<T> {
    const { search, searchFields, orderBy, order } = options || {};
    const queryBuilder = repository.createQueryBuilder();

    if (search && searchFields) {
      searchFields.forEach((field, index) => {
        const parameter = `search${index}`;
        const condition = `${field} LIKE :${parameter}`;
        const parameters = { [parameter]: `%${search}%` };

        index === 0
          ? queryBuilder.where(condition, parameters)
          : queryBuilder.orWhere(condition, parameters);
      });
    }

    orderBy && queryBuilder.orderBy(orderBy, order || 'ASC');

    return queryBuilder;
  }

  async paginate<T>(
    queryBuilder: SelectQueryBuilder<T>,
    page = 1,
    limit = 10,
  ): Promise<PaginationResult<T>> {
    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    const isEnd = page * limit >= total;

    return { data, total, page, limit, isEnd };
  }
}
