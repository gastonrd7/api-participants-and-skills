"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = express_1.default();
//settungs
app.set('port', process.env.PORT || 3001);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes
app.get('/', (req, res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`);
});
app.use('/Api', routes_1.default);
exports.default = app;
