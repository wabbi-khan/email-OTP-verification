import React from 'react';
import styles from '../styles/Username.module.css';
import avatar from '../assets/profile.png';
import { Link } from 'react-router-dom';
const Username = () => {
  return (
    <div className="container mx-auto py-2">
      <div className="flex justify-center items-center w-full h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center">
              <input
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={`mt-2 ${styles.btn}`} type="submit">
                Let's Go
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-gray-500">
                Not a Member{' '}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
