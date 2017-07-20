import React from 'react'
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  signIn
} from '../../modules/login'

const Login = class Login extends React.Component 
{
  componentWillMount() {
    console.log('Will Mount');
  }

  componentDidMount() {
    console.log('Did mount.');
  }

  componentWillUnmount(){
    console.log('WIll Unmount mount.');
  }

  render()
  {
    if (!this.props.user)
    {
       return (
        <div className="container">
          <h2>Login Here!</h2>
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Login</button>
          {/*<!-- Modal -->*/}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
            
               {/*<!-- Modal content-->*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                </div>

                <div className="modal-body">
                   <div className ="form-signin">
                      <input type='text' ref='username' className="form-control"  placeholder='Username' />
                      <input type='password' ref='password' className="form-control"  placeholder='Password' />
                      <button onClick={(event) => this.handleClick(event)} className="btn btn-lg btn-primary btn-block" data-dismiss="modal">
                        SignIn
                      </button>
                    </div> 
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }
    else
    {
      return (
      <div>
        <h1>Home</h1>
        <p>Name: {this.props.user.name}</p>
        <Link to="/">Home</Link>
      </div>
   	  )
    }
  }

   handleClick(event) {
    event.preventDefault();
    console.log(event);
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.signIn(creds)
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
  signIn: state.login.signIn,
  isFetching: state.login.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
   signIn
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)