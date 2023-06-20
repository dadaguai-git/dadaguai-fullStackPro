import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'article_newsletter' })
export class ArticleNewsletter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'title',
    length: 50,
    comment: '标题',
  })
  title: string;

  @Column({
    name: 'introduction',
    length: 120,
    comment: '简介',
  })
  introduction: string;

  @Column({
    name: 'author',
    length: 50,
    comment: '作者',
  })
  author: string;

  @Column({
    name: 'views',
    type: 'int',
    comment: '观看数量',
  })
  views: number;

  @Column({
    name: 'likes',
    type: 'int',
    comment: '点赞数',
  })
  likes: number;

  @Column({
    name: 'comments',
    type: 'int',
    comment: '评论数',
  })
  comments: number;

  @Column({
    name: 'tags',
    length: 50,
    comment: '标签',
  })
  tags: string;

  @Column({
    name: 'category',
    length: 50,
    comment: '分类',
  })
  category: string;

  @Column({
    name: 'isPublished',
    type: 'int',
    comment: '是否已发布',
  })
  isPublished: number;

  @CreateDateColumn({ name: 'publishDate', comment: '发布日期' })
  publishDate: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '最后更新时间' })
  updatedAt: Date;
}
