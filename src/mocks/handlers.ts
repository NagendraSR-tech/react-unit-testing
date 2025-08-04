import { http, HttpResponse } from 'msw'

// src/mocks/handlres.ts
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
        { name: 'John Doe' },
        { name: 'Jane Smith' },
        { name: 'Alice Johnson' }
      ])
  }),
]
