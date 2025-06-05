"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicacionController = void 0;
const ubicacionProducto_model_1 = require("../models/ubicacionProducto.model");
class UbicacionController {
    constructor() {
        this.crearUbicacion = (req, res) => {
            const nuevaUbicacion = new ubicacionProducto_model_1.default({
                ubicacion: req.body.ubicacion
            });
            nuevaUbicacion.save()
                .then(ubicacionCreada => {
                res.status(201).json({
                    ok: true,
                    ubicacion: ubicacionCreada,
                    message: 'Ubicacion creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.obtenerUbicaciones = (req, res) => {
            ubicacionProducto_model_1.default
                .find()
                .then(ubicaciones => {
                res.status(200).json({
                    ok: true,
                    ubicaciones: ubicaciones
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarUbicacion = (req, res) => {
            ubicacionProducto_model_1.default
                .findByIdAndUpdate(req.params.id, {
                ubicacion: req.body.ubicacion
            })
                .then(ubicacionActualizada => {
                res.status(200).json({
                    ok: true,
                    ubicacion: ubicacionActualizada,
                    message: 'Ubicacion actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Ubicacion no actualizada'
                });
            });
        };
        this.eliminarUbicacion = (req, res) => {
            ubicacionProducto_model_1.default
                .findByIdAndDelete(req.params.id)
                .then(ubicacionEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Ubicacion eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error,
                    message: 'Ubicacion no eliminada'
                });
            });
        };
    }
}
exports.UbicacionController = UbicacionController;
//# sourceMappingURL=ubicacionProducto.controller.js.map