"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ubicacionProducto_routes_1 = require("modules/ubicacionProducto/routes/ubicacionProducto.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.ubicacionRoutes = new ubicacionProducto_routes_1.UbicacionRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.ubicacionRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map