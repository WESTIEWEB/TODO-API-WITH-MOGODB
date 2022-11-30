"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log("MngoDB connected Successfully...");
});
const port = process.env.PORT || 3700;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use('/todos', todoRoute_1.default);
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log("listening on %s", port);
});
//# sourceMappingURL=index.js.map