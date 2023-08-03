const mongoose = require("mongoose")

const citasSchema = mongoose.Schema({
  doctor: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  //   doctor: {
  //     type: String,
  //     required: true,
  //   },
})

module.exports = mongoose.model("Citas", citasSchema)
