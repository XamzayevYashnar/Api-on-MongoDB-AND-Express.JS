import Joi from "joi";

export class CompanyValidate {
  static postCompany(data) {
    const postSchema = Joi.object({
      name: Joi.string().min(6).max(20).required().messages({
        "string.empty": "Iltimos name ni bush qoldirmang",
        "string.min": "name juda kichkina",
        "string.max": "name juda uzun",
        "any.required": "name kiritilishi shart"
      }),
    });

    return postSchema.validate(data);
  }

  static patchCompany(data) {
    const patchSchema = Joi.object({
      name: Joi.string().min(6).max(20).optional().messages({
        "string.empty": "Iltimos name ni bush qoldirmang",
        "string.min": "name juda kichkina",
        "string.max": "name juda uzun",
        "any.required": "name kiritilishi shart"
      })
    });

    return patchSchema.validate(data);
  }
}
