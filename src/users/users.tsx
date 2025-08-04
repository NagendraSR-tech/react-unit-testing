import { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => {
        setError('Failed to fetch users')
      })
  }, [])

  return (
    <div>
      <h2>Users</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
