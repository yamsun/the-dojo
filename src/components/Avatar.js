// styles
import './Avatar.css'

export default function Avatar({ src, title }) {
  return (
    <div className='avatar'>
        <img src={src} alt='user avatar' title={title} />
    </div>
  )
}
