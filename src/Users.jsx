import { useEffect, useState } from "react"
import './User.css'

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="border">
      <h3>Users: {users.length}</h3>
    </div>

  )

}

