"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const axios_2 = require("axios");
let CategoryService = class CategoryService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async get_filter() {
        try {
            const API_URL = 'https://www.themealdb.com/api/json/v1/1';
            const [categories, ingredients, areas] = await Promise.all([
                axios_2.default.get(`${API_URL}/list.php?c=list`),
                axios_2.default.get(`${API_URL}/list.php?i=list`),
                axios_2.default.get(`${API_URL}/list.php?a=list`),
            ]);
            return {
                categories: categories.data.meals.map((c) => c.strCategory),
                ingredients: ingredients.data.meals.map((i) => i.strIngredient),
                countries: areas.data.meals.map((a) => a.strArea),
            };
        }
        catch (e) {
        }
    }
    get_recept_by_categry(category) {
    }
    async get_recept_by_filter(categories, name) {
        try {
            let url;
            if ("ingredients" == categories) {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
            }
            else if ("countries" == categories) {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`;
            }
            else if ("categories" == categories) {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
            }
            else {
                throw new Error('when you get recept');
            }
            const response = await axios_2.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new Error('when you get recept');
        }
    }
    async get_one(id) {
        try {
            const response = await axios_2.default.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            return response.data;
        }
        catch (error) {
            throw new Error('when you get recept');
        }
    }
    async get_recipes_by_ingredient(ingredient) {
        if (!ingredient) {
            return { message: 'Ingredient is required' };
        }
        try {
            const { data } = await axios_2.default.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            return { meals: data.meals || [] };
        }
        catch (error) {
            throw new Error('Ошибка при получении рецептов');
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CategoryService);
//# sourceMappingURL=category.service.js.map