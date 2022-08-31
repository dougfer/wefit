import axios from 'axios'
import { Movie } from 'src/types'

const api = axios.create({
  baseURL: 'http://192.168.0.42:3333',
})

export const getMoviesOperation = async (): Promise<Movie[]> => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (err: any) {
    return err
  }
}
