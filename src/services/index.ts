import axios from 'axios'
import TasksServices from './Tasks'
import Tasks from './Tasks'

//criando uma instância do Axios usando o método create, que recebe um objeto de configuração que define a URL base
const httpClient = axios.create({
  baseURL: 'https://dummyjson.com'
})

export default {
  //a propriedade tasks recebe a função chamada TasksServices e recebe a instancia do htttpClient como argumento
  tasks: Tasks(httpClient)
}
