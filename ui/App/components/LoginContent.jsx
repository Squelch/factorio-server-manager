import React from 'react';
import {IndexLink} from 'react-router';

class LoginContent extends React.Component {
    constructor(props) {
        super(props)
        this.loginUser = this.loginUser.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }

    loginUser(e) {
        e.preventDefault();
        console.log(this)
        let user = {
            username: this.refs.username.value,
            password: this.refs.password.value,
        }

        $.ajax({
            type: "POST",
            url: "/api/login",
            dataType: "json",
            data: JSON.stringify(user),
            success: (resp) => {
                console.log(resp)
            }
        })
    }

    render() {
        return(
                <div className="container center-block">
                    <div className="row">
                        <div className="col-xs-6">
                        <div className="center-block">
                            <section className="content-header">
                            <h1>
                                Login
                                <small>Login to manage Factorio</small>
                            </h1>
                            </section>

                            <section className="content">
                            <div className="row">
                                <div className="login-box-body">

                                    <form onSubmit={this.loginUser}>
                                        <div className="form-group has-feedback">
                                            <input type="text" ref="username" className="form-control" placeholder="Username" />
                                            <span className="fa fa-envelope form-control-feedback"></span>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <input type="password" ref="password" className="form-control" placeholder="Password" />
                                            <span className="fa fa-lock form-control-feedback"></span>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-8">
                                                <div className="checkbox">
                                                    <label className="">
                                                        <div className="" aria-checked="false" aria-disabled="false" style={{position: "relative"}}>
                                                        <input type="checkbox"/>
                                                        </div> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                            </div>
                                        </div>
                                    </form>

                                    <a href="#">I forgot my password</a><br />
                                </div>       
                            </div>
                            </section>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LoginContent
