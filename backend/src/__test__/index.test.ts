import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { random } from 'lodash'
import { findServer } from '..'
import { services } from '../const'
import { NoServersError, ServerConfig } from '../type'

const servicesMapping: { [key: number]: ServerConfig } = services.reduce(
  (acc, item) => {
    acc[item.priority] = item
    return acc
  },
  {} as { [key: number]: ServerConfig }
)

describe('findServer', () => {
  let mock: MockAdapter
  beforeEach(() => {
    mock = new MockAdapter(axios)
  })
  afterEach(() => {
    mock.restore()
  })
  it('should return lowest priority', async () => {
    services.map((service) => {
      mock
        .onGet(service.url)
        .reply(random(200, 299), {}, { delayResponse: 100 })
    })

    const result = await findServer()
    expect(result).toEqual(servicesMapping[1])
  })

  it('should return online server while other servers are not online in 5 seconds', async () => {
    services.map((service) => {
      mock
        .onGet(service.url)
        .reply(
          random(200, 299),
          {},
          { delayResponse: service.priority === 1 ? 1000 : 10000 }
        )
    })
    const result = await findServer()
    expect(result).toEqual(servicesMapping[1])
  })

  it('should throw if no servers online with status 404', async () => {
    services.map((service) => {
      mock
        .onGet(service.url)
        .reply(404, {}, { delayResponse: service.priority * 100 })
    })
    await expect(findServer()).rejects.toThrow(new Error(NoServersError))
  })

  it('should throw if no servers online in 5 seconds', async () => {
    services.map((service) => {
      mock.onGet(service.url).reply(404, {}, { delayResponse: 10000 })
    })
    await expect(findServer()).rejects.toThrow(new Error(NoServersError))
  })
})
