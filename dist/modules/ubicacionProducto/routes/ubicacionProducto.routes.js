"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicacionRoutes = void 0;
const ubicacionProducto_controller_1 = require("../controllers/ubicacionProducto.controller");
class UbicacionRoutes {
    constructor() {
        this.ubicacionProductoController = new ubicacionProducto_controller_1.UbicacionController();
    }
    routes(app) {
        app.route('/ubicacion')
            .get(this.ubicacionProductoController.obtenerUbicaciones)
            .post(this.ubicacionProductoController.crearUbicacion);
        app.route('/ubicacion/:id')
            .put(this.ubicacionProductoController.actualizarUbicacion)
            .delete(this.ubicacionProductoController.eliminarUbicacion);
    }
}
exports.UbicacionRoutes = UbicacionRoutes;
//# sourceMappingURL=ubicacionProducto.routes.js.map