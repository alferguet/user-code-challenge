import { User } from './interfaces/user'
import { api } from './api'

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await api.get('/users')
    if (response.status === 200) {
      return response.data
    }
    return []
  } catch (err) {
    if (err.response.status === 500) {
      throw new Error('Internal server error')
    } else {
      throw new Error('Not handled')
    }
  }
}
