"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const lends_routes_1 = __importDefault(require("./routes/lends.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/lends', lends_routes_1.default);
app.use('/users', users_routes_1.default);
app.listen(9090, () => {
    console.log('Server is running ...');
});
// async function main() {
//   await productService.findByCategory(2)
// }
// main()
