import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isLogFailed: true, errMsg: ""}
  onSubmitBtn = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const rawData = await fetch(url, options)
    console.log(rawData)
    if (rawData.ok === true) {
      this.props.history.replace('/')
    } else {
      const text = await rawData.json()
      console.log(text.error_msg)
      this.setState({isLogFailed: false, errMsg: text.error_msg})
    }

    this.setState({username: '', password: ''})
  }
  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }
  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }
  render() {
    const {username, password, isLogFailed, errMsg} = this.state
    return (
      <div className="d-flex">
        <img
          className="login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-sub-conatiner">
          <img
            className="login-webiste-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form onSubmit={this.onSubmitBtn} className="form-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              id="username"
              value={username}
              onChange={this.onChangeUserName}
              className="input-box"
              type="text"
              placeHolder="Username"
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              id="password"
              value={password}
              onChange={this.onChangeUserPassword}
              className="input-box"
              type="password"
              placeHolder="Password"
            />
            {isLogFailed ? (
              ''
            ) : (
              <p className="error">{`*${errMsg}`}</p>
            )}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
