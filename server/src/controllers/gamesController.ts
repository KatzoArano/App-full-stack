import {Request, Response} from 'express';

import pool from "../database";

class GamesController {
    
    public index(req: Request, res: Response){
        pool.query('DESCRIBE games');
        res.json( 'games');
    }

    public create(req: Request, res: Response){
        res.json({text: 'Created game'});
    }

    public update(req:Request, res:Response){
        res.json({text: 'Updated game' + req.params.id});
    }

    public delete(req:Request, res:Response){
        res.json({text: 'Deleted game' + req.params.id});
    }
}

const gamesController = new GamesController();
export default gamesController;