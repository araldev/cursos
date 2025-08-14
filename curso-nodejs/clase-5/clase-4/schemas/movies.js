import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Animation', 'Biography', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Sci-fi', 'Thriller']),
    {
      required_error: 'Movie genre is required.',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  ),
  year: z.number().int().min(1900).max(2026),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string()
})

export function validateMovie (input) {
  return movieSchema.safeParse(input) // <--- Te devuelve un objeto result con
  // {success: true, data} ó {success: false, error}

  // return movieSchema.parse(input) // <--- Devuelve un new Error, envolver en try{}catch(err){}
}

export function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}
