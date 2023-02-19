"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const next_1 = __importDefault(require("next"));
const url_1 = require("url");
const env_1 = require("../env/env");
const log_1 = require("./log");
const PORT = env_1.env.PORT || 3000;
const DEVELOPMENT = env_1.env.NODE_ENV !== 'production';
const nextApp = (0, next_1.default)({ dev: DEVELOPMENT });
const nextHandle = nextApp.getRequestHandler();
nextApp.prepare().then(() => {
    const app = (0, express_1.default)();
    const server = (0, http_1.createServer)(app);
    app.all('*', (req, res) => {
        const parsedUrl = (0, url_1.parse)(req.url || 'localhost:3000', true);
        nextHandle(req, res, parsedUrl);
    });
    server.listen(PORT, () => {
        const { port } = server.address();
        log_1.log.info(`Server listening at http://localhost:${port} as ${process.env.NODE_ENV}`);
    });
});
