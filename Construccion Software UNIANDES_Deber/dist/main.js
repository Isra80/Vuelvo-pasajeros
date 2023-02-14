"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exceptions_filter_1 = require("./common/filtros/http-exceptions.filter");
const tiemposalida_interceptor_1 = require("./common/interceptores/tiemposalida.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exceptions_filter_1.TodasExcepciones());
    app.useGlobalInterceptors(new tiemposalida_interceptor_1.TiempoSalidaInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map