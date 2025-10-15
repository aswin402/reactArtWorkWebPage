import React, { useState } from 'react';
import './JoinUs.scss';

const JoinUs = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="join-container">
      <div className="join-card">
        <h1>{isLogin ? 'Welcome Back' : 'Join Our Art Community'}</h1>
        <p>
          {isLogin
            ? 'Login to explore and manage your favorite artworks.'
            : 'Create an account to save, like, and explore exclusive collections.'}
        </p>

        <form className="join-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="toggle-text">
          {isLogin ? (
            <>
              <span>Don't have an account? </span>
              <button onClick={toggleForm} className="toggle-btn">Join Now</button>
            </>
          ) : (
            <>
              <span>Already a member? </span>
              <button onClick={toggleForm} className="toggle-btn">Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
