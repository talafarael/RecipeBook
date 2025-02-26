import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Get("get_filter")
  async get_filter(
  ) {
    return await this.categoryService.get_filter()
  }
  @Get("get_recept_by_filter")
  async get_recept_by_filter(
    @Query('category') category: string,
    @Query("name") name: string
  ) {
    return this.categoryService.get_recept_by_filter(category, name)
  }
  @Get("get_one")
  async det_one(
    @Query('id') id: string,
  ) {
    return this.categoryService.get_one(id)
  }
  @Get("get_recipes_by_ingredient")
  async get_recipes_by_ingredient(@Query('ingredient') ingredient: string) {
    return await this.categoryService.get_recipes_by_ingredient(ingredient)
  }


}
