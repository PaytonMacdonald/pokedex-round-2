import { AppState } from '../AppState'
import Value from '../models/Value'
import { valueApi } from './AxiosService'

class ValuesService {
  async getValues(query) {
    const res = await valueApi.get(query)
    AppState.results = res.data.results.map(r => new Value(r))
  }

  setActive(value) {
    AppState.activeValue = value
  }
}

export const valuesService = new ValuesService()