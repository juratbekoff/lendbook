"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lends_mapper_1 = __importDefault(require("../mappers/lends.mapper"));
const lends_service_1 = __importDefault(require("../service/lends.service"));
const router = (0, express_1.Router)();
// GET brands/
router.get('/', (req, res) => {
    lends_service_1.default.findAll()
        .then(brands => res.json(brands))
        .catch(err => res.status(404).json({ message: 'Error while retriving brands', error: err }));
});
router.post('/', (req, res) => {
    lends_service_1.default.create((0, lends_mapper_1.default)(req.body))
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).json({ message: 'Error while create brand', error: err }));
});
router.delete('/:id', (req, res) => {
    lends_service_1.default.remove(+req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(404).json({ message: 'Error while delete brand', error: err }));
});
router.delete('/all', (req, res) => [
    lends_service_1.default.removeAll(req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).json({ message: 'Error while delete ALL', error: err }))
]);
router.put('/:id', (req, res) => {
    lends_service_1.default.update(+req.params.id, (0, lends_mapper_1.default)(req.body))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).json({ message: 'Error while update brand', error: err }));
});
exports.default = router;
