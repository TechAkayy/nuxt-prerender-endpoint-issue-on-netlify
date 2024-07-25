import {products} from '~~/db.json'

export default defineEventHandler(async (/*event*/) => {
  return {
    products: products || [],
  }
})
