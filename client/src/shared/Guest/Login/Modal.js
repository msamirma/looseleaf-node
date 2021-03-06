import React from 'react';
import LoginForm from './LoginForm';

const ModalInfo = () => (
  <div className="col l12 m12 s12">
    <a className="center-align" style={{color: '#555', textDecoration: 'underline'}}>
      Terms
    </a>
  </div>

)
const SignupModal = () => (
  <div id="signup-modal" className="modal">
    <LoginForm
      action="Join"
      header="Join LooseLeaf"
    />
    <div className="row center hero">
      <div className="col l12 m12 s12">
        Already a member? <a className="modal-trigger modal-action modal-close" href="#login-modal">Log in</a>
      </div>
      <ModalInfo />
  </div>

  </div>
);

const LoginModal = () => (
  <div id="login-modal" className="modal">
    <LoginForm
      action="Continue"
      header="Welcome Back!"
    />
    <div className="row center hero">
      <div className="col l12 m12 s12">
        New to LooseLeaf? <a className="modal-trigger modal-action modal-close" href="#signup-modal">Sign up</a>
      </div>
      <ModalInfo />
    </div>
  </div>
);

export { SignupModal, LoginModal };
