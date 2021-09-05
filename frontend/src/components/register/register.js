import React, { Component } from "react";
import ReactDOM from "react-dom";
import desoc from "../../assets/images/Desoc.svg";
import axios from "axios";
import { withSnackbar } from "react-simple-snackbar";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
      name: "",
      username: "",
      phonenumber: "",
      password: "",
      password2: "",
      email: "",
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  onSubmit(e) {
    e.preventDefault();
    const { openSnackbar } = this.props;
    if (
      this.state.name === "" ||
      this.state.message === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.password2 === "" ||
      this.state.phonenumber === ""
    ) {
      openSnackbar("Please fill all details");
    } else {
      openSnackbar("Back to login page");
    }

    const newuser = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      phonenumber: this.state.phonenumber,
    };
    axios
      .post("api/users/register", newuser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-5 register-left ">
              <img src={desoc} className="DesocRegister"></img>
              <h4 className="text-left">Your Solution For Community!</h4>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
              <h2 className="signuptext">Sign Up</h2>
              <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </form>
              <form onSubmit={this.onSubmit}>
                <label>Email</label>
                <br></br>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </form>
              <form onSubmit={this.onSubmit}>
                <label>Password </label>
                <br></br>
                <input
                  type={this.state.hidden ? "password" : "text"}
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <br></br>

                <input
                  type="checkbox"
                  onChange={this.toggleShow}
                  className="checkboxRegister"
                />
                <label>Show Password</label>
              </form>
              <button className="btn" onClick={this.onSubmit}>
                Register
              </button>
            </div>
            <div className="col-3">
              <h2 className="signuptext2">Sign Up</h2>
              <div>
                <form onSubmit={this.onSubmit}>
                  <label>User Name</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    value={this.state.username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                </form>
                <form onSubmit={this.onSubmit}>
                  <label>Phone number</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    value={this.state.phonenumber}
                    onChange={(e) =>
                      this.setState({ phonenumber: e.target.value })
                    }
                  />
                </form>
                <form onSubmit={this.onSubmit}>
                  <label>Confirm Password </label>
                  <br></br>
                  <input
                    type="password"
                    name="name"
                    value={this.state.password2}
                    onChange={(e) =>
                      this.setState({ password2: e.target.value })
                    }
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(Register);

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import desoc from "../../assets/images/Desoc.svg";

// export class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       username: "",
//       email: "",
//       phonnumber: "",
//       hidden: true,
//       password: "",
//       password2: "",
//     };

//     this.toggleShow = this.toggleShow.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newUser = {
//       name: this.state.name,
//       username: this.state.username,
//       email: this.state.email,
//       phonnumber: this.state.phonnumber,
//       password: this.state.password,
//       password2: this.state.password2,
//     };
//     console.log(newUser);
//   }

//   toggleShow() {
//     this.setState({ hidden: !this.state.hidden });
//   }

//   componentDidMount() {
//     if (this.props.password) {
//       this.setState({ password: this.props.password });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="container-fluid">
//           <div className="row ">
//             <div className="col-5 register-left ">
//               <img src={desoc} className="DesocRegister"></img>
//               <h4 className="text-left">Your Solution For Community!</h4>
//             </div>
//             <div className="col-1"></div>
//             <div className="col-3">
//               <h2 className="signuptext">Sign Up</h2>
//               <form onSubmit={this.onSubmit}>
//                 <label>Name</label>
//                 <br></br>
//                 <input
//                   type="text"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.onChange}
//                 />
//               </form>
//               <form>
//                 <label>Email</label>
//                 <br></br>
//                 <input
//                   type="text"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                 />
//               </form>
//               <form>
//                 <label>Password </label>
//                 <br></br>
//                 <input
//                   type={this.state.hidden ? "password" : "text"}
//                   value={this.state.password}
//                   onChange={this.onChange}
//                 />
//                 <br></br>

//                 <input
//                   type="checkbox"
//                   onChange={this.toggleShow}
//                   className="checkboxRegister"
//                 />
//                 <label>Show Password</label>

//                 <input type="submit" value="Submit">
//                   Register
//                 </input>
//               </form>
//             </div>
//             <div className="col-3">
//               <h2 className="signuptext2">Sign Up</h2>
//               <div>
//                 <form>
//                   <label>User Name</label>
//                   <br></br>
//                   <input
//                     type="text"
//                     name="name"
//                     value={this.state.username}
//                     onChange={this.onChange}
//                   />
//                 </form>
//                 <form>
//                   <label>Phone number</label>
//                   <br></br>
//                   <input
//                     type="text"
//                     name="name"
//                     value={this.state.phonnumber}
//                     onChange={this.onChange}
//                   />
//                 </form>
//                 <form>
//                   <label>Confirm Password </label>
//                   <br></br>
//                   <input
//                     type="password"
//                     name="name"
//                     value={this.state.password2}
//                     onChange={this.onChange}
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
