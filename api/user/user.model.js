/**
 * User model
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: { type: String, uppercase: true, required: true },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    role: { type: String, default: 'candidate' },
    password: { type: String },
    salt: String,
    active: { type: Boolean, default: true },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
)

UserSchema.path('role').validate(
  value => /manager|candidate|admin/i.test(value),
  'role, assigned role is invalid'
)

/**
 * Virtuals
 */

// Public profile information
UserSchema.virtual('profile').get(function () {
  return { name: this.name, role: this.role }
})

// Non-sensitive info we'll be putting in the token
UserSchema.virtual('token').get(
  (() => ({ _id: this._id, role: this.role }), this)
)

/**
 * Pre-save hook
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

module.exports = mongoose.model('User', UserSchema)
