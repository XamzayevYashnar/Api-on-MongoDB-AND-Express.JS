import { asyncCatch } from "../middleware/asyncCatch.js"
import { successResponce } from "../helpers/succes-responce.js"
import { ApiError } from "../helpers/ApiError.js"

export class BaseController {

    constructor (schema, populate){
        this.schema = schema
        this.populate = populate
    }

    create = asyncCatch(async (req, res)=>{
        const data = await this.schema.create(req.body)

        if (!data){
            throw new ApiError('Error on data', 409)
        }

        return successResponce(res, data, 201)
    })

    findAll = asyncCatch(async (req, res)=>{
        const data = await this.schema.find().populate(this.populate)

        if (!data || data.length === 0){
            return successResponce(res, 'Malumot hali qushilmagan!', 200)
        }

        return successResponce(res, data, 200)
    })

    findOne = asyncCatch(async (req, res)=>{
        const data = await this.schema.findById(req.params.id).populate(this.populate)

        if (!data){
            throw new ApiError('Error id, Page not found! findOne', 404)
        }

        return successResponce(res, data, 200)
    })

    update = asyncCatch(async (req, res)=>{
        const data = await this.schema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!data){
            throw new ApiError('Error id, Page not found! update', 404)
        }

        return successResponce(res, data, 200)
    })

    patch = asyncCatch(async (req, res)=>{
        const data = await this.schema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!data){
            throw new ApiError('Error id, Page not found! patch', 404)
        }

        return successResponce(res, data, 200)
    })

    delete = asyncCatch(async (req, res)=>{
        const data = await this.schema.findByIdAndDelete(req.params.id)

        if (!data){
            throw new ApiError('Error id, Page not found! delete', 404)
        }

        return successResponce(res, data, 200)
    })

}