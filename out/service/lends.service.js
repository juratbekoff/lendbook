"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
function create(brand) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'INSERT INTO lendlists (name, date, lend) VALUES ($1,$2,$3)';
        yield client_1.default.query(sql, [brand.name, brand.date, brand.lend]);
    });
}
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'SELECT * FROM lendlists';
        let result = yield client_1.default.query(sql);
        return result.rows;
    });
}
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'DELETE FROM lendlists WHERE id=$1';
        yield client_1.default.query(sql, [id]);
    });
}
function removeAll(removeAll) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'DELETE FROM lendlists';
        yield client_1.default.query(sql, [removeAll]);
    });
}
function update(id, brand) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'UPDATE TABLE lendlists SET name=$1 WHERE id=$2';
        yield client_1.default.query(sql, [brand.name, id]);
    });
}
exports.default = {
    create,
    findAll,
    remove,
    update,
    removeAll
};
