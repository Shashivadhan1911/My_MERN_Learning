import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      setMessage(data.message)
      if (response.ok) {
        navigate('/welcome')
      }
    } catch (error) {
      setMessage('Error: ' + error.message)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    if (regPassword !== confirmPassword) {
      setMessage('Passwords do not match')
      return
    }
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: regEmail, password: regPassword }),
      })
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      setMessage('Error: ' + error.message)
    }
  }

  return (
    <div className="App">
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : 'Need to register?'}
      </button>
      {isRegister ? (
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="regEmail">Email:</label>
            <input
              type="email"
              id="regEmail"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="regPassword">Password:</label>
            <input
              type="password"
              id="regPassword"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  )
}

export default Login
