import {Request, Response} from 'express';

import pool from "../database";

class GamesController {
    
    public async getList(req: Request, res: Response){
      const games = await pool.query('SELECT * FROM games');
      res.json(games);
    }

    public getOneGame(req:Request, res:Response){
        res.json({text: 'Updated game' + req.params.id});
    }

    public async createGame(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body])
        res.json({text: 'Game saved'});
    }


    public updateGame(req:Request, res:Response){
        res.json({text: 'Updated game' + req.params.id});
    }

    public deleteGame(req:Request, res:Response){
        res.json({text: 'Deleted game' + req.params.id});
    }
}

const gamesController = new GamesController();
export default gamesController;