import {z} from 'zod'
import { insertProductSchema, insertCartSchema, cartItemSchema } from '@/lib/validators'

export type Product = z.infer<typeof insertProductSchema> & {
  id: string
  rating: string
  createdAt: Date
}