import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    get_filter(): Promise<{
        categories: any;
        ingredients: any;
        countries: any;
    } | undefined>;
    get_recept_by_filter(category: string, name: string): Promise<any>;
    det_one(id: string): Promise<any>;
    get_recipes_by_ingredient(ingredient: string): Promise<{
        message: string;
        meals?: undefined;
    } | {
        meals: any;
        message?: undefined;
    }>;
}
