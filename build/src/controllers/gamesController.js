"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json('games');
    }
    create(req, res) {
        res.json({ text: 'Created game' });
    }
    update(req, res) {
        res.json({ text: 'Updated game' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Deleted game' + req.params.id });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
