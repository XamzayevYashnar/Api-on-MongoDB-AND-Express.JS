import Joi from "joi";

export class UserValidate {
  static postUser(data) {
    const userSchema = Joi.object({
      username: Joi.string().min(6).max(20).required().messages({
        "string.empty": "Iltimos username ni bush qoldirmang",
        "string.min": "Username juda kichkina",
        "string.max": "Username juda uzun",
        "any.required": "Username kiritilishi shart"
      }),
      email: Joi.string().email().required().messages({ 
        "string.empty": "Emailni bush qoldirmang!",
        "string.email": "Yaroqli email manzilini kiriting!",
        "any.required": "Email kiritilishi shart"
      }),

      role: Joi.string().optional().messages({
        "string.empty": "role bulmini ni bush qoldirmang!",
        "any.required": "role kiritilishi shart"
      }),
      
      department: Joi.string().required().messages({
        "string.empty": "Department id ni bush qoldirmang!",
        "any.required": "Department kiritilishi shart"
      })
    });

    return userSchema.validate(data);
  }

  static patchUser(data) {
    const userSchema = Joi.object({
      username: Joi.string().min(6).max(20).optional().messages({
        "string.empty": "Iltimos username ni bush qoldirmang",
        "string.min": "Username juda kichkina",
        "string.max": "Username juda uzun"
      }),
      email: Joi.string().email().optional().messages({ 
        "string.empty": "Emailni bush qoldirmang!",
        "string.email": "Yaroqli email manzilini kiriting!"
      })
    });

    return userSchema.validate(data);
  }
}
