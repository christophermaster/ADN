import mongoose from '../config/conexion_mongoose';

const Schema = mongoose.Schema;

const ADNSchema = new Schema({
    ADN: Object,
    mutado: Number,
});

// Convertir a modelo
const registroADN = mongoose.model('registroADN', ADNSchema);

export default registroADN;