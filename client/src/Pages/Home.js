import React from 'react';
import SignInSide from '../components/SignInSide';

// sign in/sign up page 
const Home = () => {
  return (
    <div className='container'>
      <section className='section user-account'>
        <h1>Welcome to the Animal Tracking</h1>
        <SignInSide />
      </section>
    </div>
  )
}

export default Home