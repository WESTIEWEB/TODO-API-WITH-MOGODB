"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = exports.creatTaskSchema = exports.updateTaskSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.updateTaskSchema = joi_1.default.object().keys({
    description: joi_1.default.string().min(5),
    status: joi_1.default.string(),
});
exports.creatTaskSchema = joi_1.default.object().keys({
    description: joi_1.default.string().min(5).required(),
});
exports.option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};
//# sourceMappingURL=index.js.map