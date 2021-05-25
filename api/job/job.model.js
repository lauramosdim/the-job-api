const mongoose = require('mongoose')

const JobSchema = mongoose.Schema({
  company: { type: String, required: true },
  // image: { data: Buffer, contentType: String, required: true },
  about: { type: String, required: true },
  summary: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  certificate: { type: String, required: true },
  experience: { type: String, required: true },
  hours: { type: String, required: true },
  responsibilities: { type: String, required: true },
  minimumQualifications: { type: String, required: true },
  preferredQualifications: { type: String, required: true },
  ago: { type: Date },
  className: { type: String, required: true },
  candidates: []
}, { timestamps: true }
)

module.exports = mongoose.model('Job', JobSchema)
