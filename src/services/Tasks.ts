import type { AxiosInstance } from 'axios'

export default (httpClient: AxiosInstance) => ({
  getAllTasks: async ({ limit, skip }: { limit: number; skip: number }) => {
    const query = {
      limit,
      skip
    }
    // na primeira linha definimos o nome da função, deixamos com assíncrona e passamos o parâmetro limit, tipando ele como number
    const response = await httpClient.get('/todos', { params: query })
    return {
      data: response.data
    }
  }
})
