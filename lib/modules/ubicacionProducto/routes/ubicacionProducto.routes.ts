import { UbicacionController } from "../controllers/ubicacionProducto.controller";

export class UbicacionRoutes {
    private ubicacionProductoController: UbicacionController = new UbicacionController();

    public routes(app): void {
        app.route('/ubicacion')
        .get(this.ubicacionProductoController.obtenerUbicaciones)
        .post(this.ubicacionProductoController.crearUbicacion);

        app.route('/ubicacion/:id')
        .put(this.ubicacionProductoController.actualizarUbicacion)
        .delete(this.ubicacionProductoController.eliminarUbicacion);
    }
}