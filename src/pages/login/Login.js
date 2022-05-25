import { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Link } from 'react-router-dom'

// styles
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [test, setTest] = useState(false)
    const { login, isPending, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    const fillTestCred = (e) => {
        setEmail('test@user.com')
        setPassword('testpass')
    }



  return (
    <form className='auth-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br/>
        {!isPending && <button className='btn' onClick={fillTestCred}>Login with test credentials </button>}
        <label>
            <span>email:</span>
            <input 
                required 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
        </label>
        <label>
            <span>password:</span>
            <input 
                required 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
        </label>
        {!isPending && <button className='btn'>Login</button>}
        {isPending && <button className='btn' disabled>logging in..</button>}
        <br/><br />
        <Link to='/signup' style={{ textDecoration: 'none' }}>
            <span> New user? Sign up.</span>
        </Link>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
