import React, { Component } from "react";
import desoc from "../../assets/images/Desoc.svg";
import B1 from "../../assets/images/login/bubble1.png";
import B2 from "../../assets/images/login/bubble2.png";
import B3 from "../../assets/images/login/bubble3.png";
import frame from "../../assets/images/login/Frame.svg";

export class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 register-left ">
              <img src={desoc} className="Desoclogin"></img>
              <h4 className="text-left-login">Your Solution For Community!</h4>
            </div>
            <div className="col-6">
              <h4 className="login-to-text">
                <b>Login to your Account</b>
              </h4>
              <div className="login-email">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </form>
              </div>
              <div className="login-email">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </form>
              </div>
              <div className="login-email">
                <form>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1vw" }}>Keep me logged in</label>
                </form>
              </div>

              <div className="row login-link">
                <div className="col-4">
                  <a href="/register">register</a>
                </div>
                <div className="col-8">
                  <a href="/">forgot password</a>
                </div>
              </div>
              <button className="btnlogin" onClick={this.onSubmit}>
                Login
              </button>
            </div>
          </div>
          <div className="row">
            <div className="bubble1 col-6">
              <div className="whatIsDesoc">
                A community-building platform for
                <b> architects, designers, artists </b>
                etc. First of its kind, with the <b> triple agenda</b> of
                <b> learning, displaying and empowering,</b> it is an ecosystem
                that will nurture benefactors to unleash their imagination,
                enhance their skill set and step inside the professional world.
              </div>
            </div>
            <div className="col-6 ">
              <h4 className="whatIsDesoc-heading">
                <b>WHAT IS DESOC ?</b>
              </h4>
              <div className="bubble2">
                <img src={frame}></img>
              </div>
            </div>
          </div>
          <div className="joindesoc ">
            <div className="Whyjoindesoc">WHY JOIN DESOC ?</div>
            <div className="row blocks">
              <div className="col-2"></div>
              <div className="col-3 WhyjoindesocBlock1">
                <b>Peer Learning</b> Helping a young mind to learn from
                thousands of professionals all over the globe and inspire by
                viewing and
                <b> analysing other designs.</b>
              </div>
              <div className="col-3 WhyjoindesocBlock2">
                New Possibilities- <b>Research</b> and{" "}
                <b>real world Applying</b> results of research work into
                real-world applications.
              </div>
              <div className="col-3 WhyjoindesocBlock3">
                Going <b>National</b> An <b>opportunity</b> for growing
                architectural firms to seek projects outside their city or even
                state.
              </div>
            </div>
            <div className="row blocks2">
              <div className="col-2"></div>
              <div className="col-3 WhyjoindesocBlock4">
                Social network Bringing <b>like-minded</b> and{" "}
                <b>experienced people</b> to criticise and analyse the budding
                talent.
              </div>
              <div className="col-1"></div>
              <div className="col-5 jointext">
                Join with your colleagues,<br></br> classmates, and friends.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
