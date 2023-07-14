import type { AxiosInstance } from 'axios'

export default (httpClient: AxiosInstance) => ({
  addTask: async (taskData: any) => {
    const response = await httpClient.post('/task?=', taskData)
    return response.data
  }
})
