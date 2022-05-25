import { useCollection } from '../hooks/useCollection'

// components
import Avatar from './Avatar'

// styles
import './OnlineUsers.css'

export default function OnlineUsers() {
    const {documents, error, isPending } = useCollection('users')

  return (
    <div className='user-list'>
        <h2>All Users</h2>
        {isPending && <div>Loading users...</div>}
        {error && <div className='error'>{error}</div>}
        {documents && documents.map(user => (
            <div key={user.id} className={"user-list-item"}>
                {user.online && <span className='online-user'></span>}
                <span>{user.displayName}</span>
                <Avatar src={user.photoURL} />
            </div>
        ))}
    </div>
  )
}
