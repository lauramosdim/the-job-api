/**
 * Job Model
 */
const mongoose = require('mongoose')
const Float = require('mongoose-float').loadType(mongoose)

const Schema = mongoose.Schema

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true, uppercase: true },
    image: {
      default: '/img/logo-default.jpg',
      lowercase: true,
      trim: true,
      type: String,
    },
    about: { type: String, trim: true, required: true },
    summary: { type: String, trim: true, required: true },
    type: {
      enum: ['part time', 'full time', 'freelance'],
      lowercase: true,
      required: true,
      trim: true,
      type: String,
    },
    location: { type: String, trim: true, required: true },
    salary: { type: Float, required: true },
    certificate: { type: String, trim: true, required: true },
    experience: { type: Number, min: 1, required: true },
    hours: { type: String, trim: true, required: true },
    responsibilities: [{ type: String, trim: true, required: true }],
    minimumQualifications: [{ type: String, trim: true, required: true }],
    preferredQualifications: [{ type: String, trim: true, required: true }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Job', JobSchema)
