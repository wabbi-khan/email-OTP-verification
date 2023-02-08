import React from 'react';
import styles from '../styles/Username.module.css';
import avatar from '../assets/profile.png';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/Validate';
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store';
const Password = () => {
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverData }] = useFetch(`/user/${username}`);
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  if (isLoading) return <h1 className="text-2xl font-bold">Is Loading</h1>;
  if (serverData)
    return <h1 className="text-xl text-red-500">{serverData.message}</h1>;
  return (
    <div className="container mx-auto py-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center w-full h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">
              Hello {apiData?.firstName || apiData?.username}
            </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={apiData?.profile || avatar}
                className={styles.profile_img}
                alt="avatar"
              />
            </div>

            <div className="textbox flex flex-col items-center">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              <button className={`mt-2 ${styles.btn}`} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-gray-500">
                Forget Password ? {''}
                <Link className="text-red-500" to="/register">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
