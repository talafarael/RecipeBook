import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class CategoryService {
  constructor(private readonly httpService: HttpService) { }
  async get_filter() {
    try {
      const API_URL = 'https://www.themealdb.com/api/json/v1/1';
      const [categories, ingredients, areas] = await Promise.all([
        axios.get(`${API_URL}/list.php?c=list`),
        axios.get(`${API_URL}/list.php?i=list`),
        axios.get(`${API_URL}/list.php?a=list`),
      ]);

      return {
        categories: categories.data.meals.map((c) => c.strCategory),
        ingredients: ingredients.data.meals.map((i) => i.strIngredient),
        countries: areas.data.meals.map((a) => a.strArea),
      };
    } catch (e) {

    }
  }
  get_recept_by_categry(category) {

  }
  async get_recept_by_filter(categories: string, name: string) {
    try {
      let url
      if ("ingredients" == categories) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
      } else if ("countries" == categories) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`;
      } else if ("categories" == categories) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
      } else {
        throw new Error('when you get recept');

      }

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('when you get recept');
    }
  }
  async get_one(id: string) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      return response.data;

    } catch (error) {
      throw new Error('when you get recept');
    }
  }
  async get_recipes_by_ingredient(ingredient: string) {
    if (!ingredient) {
      return { message: 'Ingredient is required' };
    }
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      return { meals: data.meals || [] };
    } catch (error) {
      throw new Error('Ошибка при получении рецептов');
    }
  }
}

