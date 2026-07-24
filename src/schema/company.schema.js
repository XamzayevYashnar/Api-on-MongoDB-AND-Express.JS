import {Schema, model, Types} from 'mongoose'

const companySchema = new Schema({
    name: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

companySchema.virtual('departments', {
    ref: 'Department',
    localField: '_id',
    foreignField: 'company'
})

const Company = model('Company', companySchema)

export {
    Company
}