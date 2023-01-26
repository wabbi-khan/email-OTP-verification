import React from 'react';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
const Recovery = () => {
  return (
    <div className="container mx-auto py-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center w-full h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>

          <form className="py-10">
            <div className="profile flex justify-center py-4">
              {/* <img src={avatar} className={styles.profile_img} alt="avatar" /> */}
            </div>

            <div className="textbox flex flex-col items-center">
              <span className="py-4 text-sm text-left text-gray-500">
                Enter 6 digit OTP sent to your email address
              </span>
              <input className={styles.textbox} type="text" placeholder="OTP" />
              <button className={`mt-2 ${styles.btn}`} type="submit">
                Recovery
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-gray-500">
                Can't get OTP ? {''}
                <button className="text-red-500" to="/register">
                  Resend Now
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
