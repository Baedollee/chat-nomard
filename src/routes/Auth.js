import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);

  // const onChangeHandler = (e) => {
  //   const {
  //     target: { name, value },
  //   } = e;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

  return (
    <div>
      <input
        name='email'
        type='email'
        placeholder='Email'
        required
        value={email}
        // onChange={onChangeHandler}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        required
        value={password}
        // onChange={onChangeHandler}
      />
      <input type='submit' placeholder='Log In' value={newAccount ? '' : ''} />
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  );
};

export default Auth;
