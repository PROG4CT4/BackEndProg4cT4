
import { ROLES } from '../../../config';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;



export interface IUbicacion extends mongoose.Document {  
    ubicacion: string;   
 }

 const UbicacionSchema = new Schema(
    {
        ubicacion: {
            type: String,
            required: [true, 'ubicacionProducto required'],
            unique: true
        }
    }
    
 );

const Ubicacion = mongoose.model<IUbicacion>("UbicacionProducto", UbicacionSchema);
export default Ubicacion;