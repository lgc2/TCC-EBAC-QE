const Joi = require('joi')

const contratoCupons = Joi.array().items(Joi.object().keys({
  id: Joi.number(),
  code: Joi.string(),
  amount: Joi.string(),
  date_created: Joi.string().isoDate(),
  date_created_gmt: Joi.string().isoDate(),
  date_modified: Joi.string().isoDate(),
  date_modified_gmt: Joi.string().isoDate(),
  discount_type: Joi.string(),
  description: Joi.string(),
  date_expires: Joi.string().allow(null).optional(),
  date_expires_gmt: Joi.string().allow(null).optional(),
  usage_count: Joi.number(),
  individual_use: Joi.boolean(),
  product_ids: Joi.array().items(Joi.number()),
  excluded_product_ids: Joi.array().items(Joi.number()),
  usage_limit: Joi.number().allow(null).optional(),
  usage_limit_per_user: Joi.number().allow(null).optional(),
  limit_usage_to_x_items: Joi.number().allow(null).optional(),
  free_shipping: Joi.boolean(),
  product_categories: Joi.array().items(Joi.string()),
  excluded_product_categories: Joi.array().items(Joi.string()),
  exclude_sale_items: Joi.boolean(),
  minimum_amount: Joi.string(),
  maximum_amount: Joi.string(),
  email_restrictions: Joi.array().items(Joi.string()),
  used_by: Joi.array().items(Joi.number()),
  meta_data: Joi.array().items(Joi.object()),
  _links: Joi.object({
    self: Joi.array().items(Joi.object({
      href: Joi.string()
    })),
    collection: Joi.array().items(Joi.object({
      href: Joi.string()
    }))
  })
}))
module.exports = contratoCupons