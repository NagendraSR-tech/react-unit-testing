// import { beforeAll, afterEach, afterAll } from 'vitest'
// import { server } from './src/mocks/node'

import '@testing-library/jest-dom'
import { server } from './mocks/server'
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())