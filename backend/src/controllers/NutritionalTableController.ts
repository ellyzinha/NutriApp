import { Request, Response } from "express";
import NutritionalDataService from "../services/NutritionalDataService";

export default {
    async getAllCategories(req: Request, res: Response){
        const nutritionalDataService = new NutritionalDataService();

        return res.json(nutritionalDataService.getAllCategories());
    }
}