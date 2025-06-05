import { UbicacionRoutes } from "./modules/ubicacionProducto/routes/ubicacionProducto.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private ubicacionRoutes: UbicacionRoutes = new UbicacionRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.ubicacionRoutes.routes(app);
    }
}