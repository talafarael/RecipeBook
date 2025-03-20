import { HttpService } from '@nestjs/axios';
export declare class CategoryService {
    private readonly httpService;
    constructor(httpService: HttpService);
    get_filter(): Promise<{
        categories: any;
        ingredients: any;
        countries: any;
    } | undefined>;
    get_recept_by_categry(category: any): void;
    get_recept_by_filter(categories: string, name: string): Promise<any>;
    get_one(id: string): Promise<any>;
    get_recipes_by_ingredient(ingredient: string): Promise<{
        message: string;
        meals?: undefined;
    } | {
        meals: any;
        message?: undefined;
    }>;
}
