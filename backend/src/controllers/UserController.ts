import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {name: 'elly', email: 'elly@gmail.com'},
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'elly', 
                email: 'elly@gmail.com'
            },
            message: {
                subject: 'teste de sistema', 
                body: 'teste'
            }
    });

        return res.send();
    }
};