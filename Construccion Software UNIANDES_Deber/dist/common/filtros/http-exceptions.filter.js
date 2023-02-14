"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodasExcepciones = void 0;
const common_1 = require("@nestjs/common");
class TodasExcepciones {
    constructor() {
        this.logger = new common_1.Logger(TodasExcepciones.name);
    }
    catch(exception, host) {
        const cts = host.switchToHttp();
        const response = cts.getResponse();
        const request = cts.getRequest();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const msg = exception instanceof common_1.HttpException ? exception.getResponse() : exception;
        this.logger.error(`Status:${status} Error: ${JSON.stringify(msg)}`);
        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: msg,
        });
    }
}
exports.TodasExcepciones = TodasExcepciones;
//# sourceMappingURL=http-exceptions.filter.js.map