import {Schema, model, Types} from 'mongoose'

const departmentSchema = new Schema({
    name: {type: String, required: true},
    company: {type: Types.ObjectId, ref: 'Company', required: true}
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

departmentSchema.virtual('staff', {
    ref: 'User',
    localField: '_id',
    foreignField: 'department'
})

const Department = model('Department', departmentSchema)

export {
    Department
}