import { Request, Response } from 'express';
import * as _ from 'lodash';
import Ubicacion from '../models/ubicacionProducto.model';

export class UbicacionController {

    crearUbicacion = (req: Request, res: Response) => {
        const nuevaUbicacion = new Ubicacion
    (
            {
                ubicacion: req.body.materia
            }
        );

        nuevaUbicacion.save()
        .then(ubicacionCreada => {
            res.status(201).json({
                ok: true,
                materia: ubicacionCreada,
                message: 'Ubicacion creada'
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        });
    }

    obtenerUbicaciones = (req: Request, res: Response) => {
        Ubicacion
    .find()
        .then(ubicaciones => {
            res.statu(200).json({
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
    }

    actualizarUbicacion = (req: Request, res: Response) => {
        Ubicacion
    .findByIdAndUpdate(req.params.id, {
            materia: req.body.ubicacion
        })
        .then(ubicacionActualizada => {
            res.status(200).json({
                ok: true,
                ubicacion: ubicacionActualizada,
                message: 'Ubicacion actualizada'                
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'Ubicacion no actualizada'
            });
        });

    }

    eliminarUbicacion = (req: Request, res: Response) => {
        Ubicacion
    .findByIdAndDelete(req.params.id)
        .then(ubicacionEliminada => {
            res.status(200).json({
                ok: true,
                message: 'Ubicacione liminada'
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error,
                message: 'Ubicacion no eliminada'
            })
        });
    }
}