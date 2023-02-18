import ICategory from "../interfaces/ICategory";
import categories from '../data/categoryList.json';

class NutritionalDataService {
    getAllCategories(){
        return categories;
    }
}

export default NutritionalDataService;