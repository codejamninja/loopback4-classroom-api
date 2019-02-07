import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { Homework } from '../models';
import { MemoryDataSource, MongoDataSource } from '../datasources';

const { env } = process;
const datasource = env.DATASOURCE || 'memory';

export class HomeworkRepository extends DefaultCrudRepository<
  Homework,
  typeof Homework.prototype.id
> {
  constructor(
    @inject(`datasources.${datasource}`)
    dataSource: MemoryDataSource | MongoDataSource
  ) {
    super(Homework, dataSource);
  }
}