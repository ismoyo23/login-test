import React, { Component } from 'react';
import bg_login from '../img/bg_login.png'
import icon_google from '../img/image_51.png'
import header_responsive from '../img/header_ponsel.png'
import styles from "./style.module.css";
import "font-awesome/css/font-awesome.min.css";
import { observer } from 'mobx-react';
import {TodoStore} from '../store/Todo'
import { extendObservable } from 'mobx';
import PropTypes from 'prop-types'
import Swal from "sweetalert2";

const LoginPage = observer(class Footer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
 
  constructor() {
    super();
    this.todoStore = new TodoStore();
    

    extendObservable(this, {
      email: '',
      password: ''
    });

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.loginProsses = this.loginProsses.bind(this);
  }

  render() {
    return (
      <div className={styles.overflo}>
     
      <div  class="row no-gutters">
   <div class="col-md-6">
     <img className={styles.bg_login}  src={bg_login}  alt="..."/>
     <img className={styles.header_ponsel}  src={header_responsive}  alt="..."/>
   </div>
   <div style={{backgroundColor: 'white'}} class="col-md-6">
     <div style={{marginRight: 60, marginLeft: 60}}>
     
     <div style={{backgroundColor: 'white'}} class="card-body">
       <p className={styles.header}>Login To Bearn Space</p>
       <button style={{width: '100%', backgroundColor:'white'}} type="submit" class="btn btn-muted"><img src={icon_google}/><span style={{coloe: 'white', fontFamily: 'roboto', marginLeft: 9}}>Log In with Google</span></button>
       <button style={{width: '100%', backgroundColor:'#4267B2', marginTop: 9}} type="submit" class="btn btn-primary"><i class="fa fa-facebook-square" aria-hidden="true"></i><span style={{coloe: 'white', fontFamily: 'roboto', marginLeft: 9}}>Log In with facebook</span></button>
     <div>

       <p style={{textAlign: 'center', marginTop: 19, fontFamily: 'roboto', fontSize: 14, fontWeight: 'normal', color: '#B1B1B1'}}>or login with your email</p>
 <div class="form-group">
   <label style={{fontFamily: 'roboto'}} for="exampleInputEmail1">Email address <span style={{color: 'red', fontWeight: 'bold'}}>*</span></label>
   <input onChange={this.changeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
 </div>
 <div style={{marginTop: 13}} class="form-group">
   <label style={{fontFamily: 'roboto'}} for="exampleInputPassword1">Password <span style={{color: 'red', fontWeight: 'bold'}}>*</span></label>
   <input value={this.password}
                 onChange={this.changePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
 </div>

 <button onClick={this.loginProsses} style={{width: '100%', marginTop: 39, backgroundColor:'#EB2730'}} type="submit" class="btn btn-danger">Login</button>

   <p style={{textAlign: 'center', fontFamily: 'roboto', color: '#00ACEE', marginTop: 9}}>forgot Password?</p>
   <div style={{flexDirection: 'row'}}>
     <p style={{textAlign: 'center'}}>
     <span style={{fontFamily: 'roboto'}}>Don't have account? </span> <span style={{color: '#00ACEE', fontFamily: 'roboto'}}>create account</span>
     </p>
   </div>
</div>
     </div>
   </div>
   </div>
 </div>

   
 </div>
    );
  }

  changeEmail(e) {
    this.email = e.target.value;
  }

  changePassword(e) {
    this.password = e.target.value;
  }

  registerProsses(e) {
      this.todoStore.create({
        email: this.email,
        password: this.password
      }, () => {
        Swal.fire({
          title: 'Success',
          text: "Register Success",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
   
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push('/');
          }
        })
      });
    
  }
});

export default LoginPage