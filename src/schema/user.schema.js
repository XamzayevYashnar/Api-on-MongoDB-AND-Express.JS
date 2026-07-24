import {Schema, model, Types} from 'mongoose'

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String, default: 'staff', enum: ['admin', 'staff']},
    department: {type: Types.ObjectId, required: true}
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

const User = model('User', userSchema)

export {
    User
}