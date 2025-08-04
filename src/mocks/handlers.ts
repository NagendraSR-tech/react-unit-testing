// // src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Alice Johnson' },
    ])
  }),
]

// prev version msw
// import { rest } from 'msw'

// export const handlers = [
//   rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         { name: 'John Doe' },
//         { name: 'Jane Smith' },
//         { name: 'Alice Johnson' }
//       ])
//     );
//   })
// ];
