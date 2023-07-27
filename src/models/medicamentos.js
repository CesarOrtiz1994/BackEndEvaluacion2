const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema(
    {
      nombre: {
        type: String,
        unique: true,
        uppercase: true,
        minlength: 6,
        maxlength: 100,
        required: true,
      },
      descripcion: {
        type: String,
        maxlength: 500,
        uppercase: true,
      },
      dosisRec: {
        type: String,
        maxlength: 20,
        uppercase: true,
        required: true,
      },
      efectosSec: {
        type: String,
        maxlength: 500,
        uppercase: true,
      },
      contraindicaciones: {
        type: String,
        maxlength: 500,
        uppercase: true,
      },
      fechaCaduc: {
        type: String,
        uppercase: true,
        required: true,
      },
    }
  );
  

module.exports = mongoose.model('Medicamentos', medicineSchema);