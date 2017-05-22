import React, {Component} from 'react'
import Form from './components/Form'

import '../../assets/css/login.css'

class Login extends Component {
  handleSubmit = values => console.log(values)
  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="jumbotron">
            <div className="row text-center">
              <h2>Faça login aqui</h2>
            </div>
            <div className="row">
              <div className="col-md-10">
                <Form onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
