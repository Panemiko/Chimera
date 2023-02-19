"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.log = {
    info(...logs) {
        console.info(chalk_1.default.bold.green('>', logs));
    },
    error(...logs) {
        console.error(chalk_1.default.bold.red('>', logs));
    },
};
