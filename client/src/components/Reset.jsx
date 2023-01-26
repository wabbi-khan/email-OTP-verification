import React from 'react';
import styles from '../styles/Username.module.css';
// import avatar from '../assets/profile.png';
// import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/Validate';
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
      confirm_pwd: 'admin@123',
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto py-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center w-full h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter New Password.
            </span>
          </div>

          <form className="py-10" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              {/* <img src={avatar} className={styles.profile_img} alt="avatar" /> */}
            </div>

            <div className="textbox flex flex-col items-center">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                className={`mt-4 ${styles.textbox}`}
                type="text"
                placeholder="Confirm Password"
              />
              <button className={`mt-4 ${styles.btn}`} type="submit">
                Reset
              </button>
            </div>

            {/* <div className="text-center pt-2">
              <span className="text-gray-500">
                Forget Password ? {''}
                <Link className="text-red-500" to="/register">
                  Recover Now
                </Link>
              </span>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
