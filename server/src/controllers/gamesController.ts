import {Request, Response} from 'express';

import pool from "../database";

class GamesController {
    
    public async getList(req: Request, res: Response){
      const games = await pool.query('SELECT * FROM games');
      res.json(games); 
    }

    public async getOneGame(req:Request, res:Response): Promise<any>{
        const {id} = req.params;
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id])
        if(game.lenght > 0){
            return res.json(game[0])
        }
        res.status(404).json({text: 'The game not exist'})
    }

    public async createGame(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body])
        res.json({text: 'Game saved'});
    }


    public async updateGame(req:Request, res:Response){
        const {id} = req.params;
        await pool.query('UPDATE games set WHERE id = ?', [req.body, id])
    }

    public async deleteGame(req:Request, res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id])
        res.json({text: 'Deleted game'});
    }
}

const gamesController = new GamesController();
export default gamesController;