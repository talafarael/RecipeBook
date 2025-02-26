import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CategoryController],
  imports: [HttpModule],
  providers: [CategoryService],
})
export class CategoryModule { }
