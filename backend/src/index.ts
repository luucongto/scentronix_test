import axios from 'axios'
import { sortBy } from 'lodash'
import { services } from './const'
import { NoServersError, ServerConfig } from './type'

export const findServer = async () => {
  const tasks = sortBy(services, 'priority').map(async (eachService) => {
    try {
      const data = await axios.get(eachService.url, {
        timeout: 5000, // 5 seconds
      })
      if (data && data.status >= 200 && data.status <= 299) {
        return eachService
      } else {
        return null
      }
    } catch (error) {
      return null
    }
  })
  const results = await Promise.all(tasks)
  if (results.some((each: ServerConfig | null) => each)) {
    return sortBy(results, 'priority')[0]
  } else {
    throw new Error(NoServersError)
  }
}
