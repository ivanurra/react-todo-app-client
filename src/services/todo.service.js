import axios from 'axios'

export default class TodoService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/todos`,
      withCredentials: true
    })
  }

  create = data => this.instance.post('/', data)
  get = params => this.instance.get('/', { params })
  getOne = id => this.instance.get(`/${id}`)
  deleteOne = id => this.instance.delete(`/${id}`)
  updateOne = (id, data) => this.instance.put(`/${id}`, data)
}