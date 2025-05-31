"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UbicacionSchema = new Schema({
    ubicacion: {
        type: String,
        required: [true, 'ubicacionProducto required'],
        unique: true
    }
});
const Ubicacion = mongoose.model("UbicacionProducto", UbicacionSchema);
exports.default = Ubicacion;
//# sourceMappingURL=ubicacionProducto.model.js.map