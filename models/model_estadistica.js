import mongoose from '../config/conexion_mongoose';

const Schema = mongoose.Schema;

const ADNSchema = new Schema({
  nombre: String,
  valor: Number
});

// Convertir a modelo
const estadisticaADN = mongoose.model('estadisticaADN', ADNSchema);

export default estadisticaADN;