import Joi from "joi";

export class DepartmentValidate {
  static postDepartment(data) {
    const postSchema = Joi.object({
      name: Joi.string().min(6).max(20).required().messages({
        "string.empty": "Iltimos name ni bush qoldirmang",
        "string.min": "name juda kichkina",
        "string.max": "name juda uzun",
        "any.required": "name kiritilishi shart"
      }),
      company: Joi.string().required().messages({
        "string.empty": "company id ni bush qoldirmang!",
        "any.required": "company kiritilishi shart"
      })
    });

    return postSchema.validate(data);
  }

  static patchDepartment(data) {
    const patchSchema = Joi.object({
      name: Joi.string().min(6).max(20).optional().messages({
        "string.empty": "Iltimos name ni bush qoldirmang",
        "string.min": "name juda kichkina",
        "string.max": "name juda uzun",
        "any.required": "name kiritilishi shart"
      }),
      company: Joi.string().optional().messages({
        "string.empty": "company id ni bush qoldirmang!",
        "any.required": "company kiritilishi shart"
      })
    });

    return patchSchema.validate(data);
  }
}
