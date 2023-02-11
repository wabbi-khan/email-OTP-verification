import React, { useEffect, useState } from 'react';
import styles from '../styles/Username.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../store/store';
import { generateOTP, verifyOTP } from '../helper/helper';
import { useNavigate } from 'react-router-dom';
const Recovery = () => {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState();
  useEffect(() => {
    generateOTP(username).then((OTP) => {
      // console.log(OTP);
      if (OTP) return toast.success('OTP has been send to your email');
      return toast.error('Problem while generating OTP');
    });
  }, [username]);
  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success('Verify Successfully...!');
        return navigate('/reset');
      }
    } catch (error) {
      return toast.error('Wrong OTP! Check email again...!');
    }
    let { status } = await verifyOTP({ username, code: OTP });
    if (status === 201) {
      toast.success('Verify Successfully...!');
      return navigate('/reset');
    }
    return toast.error('Wrong OTP! Check email again...!');
  }

  //handler reset OTP
  function resendOTP() {
    let sendPromsie = generateOTP(username);
    toast.promise(sendPromsie, {
      loading: 'Sending...!',
      success: <b>OTP has been send to your email</b>,
      error: <b>Could not send it</b>,
    });
    sendPromsie.then((OTP) => {
      // console.log(OTP);
    });
  }
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

          <form className="py-10" onSubmit={onSubmit}>
            <div className="profile flex justify-center py-4">
              {/* <img src={avatar} className={styles.profile_img} alt="avatar" /> */}
            </div>

            <div className="textbox flex flex-col items-center">
              <span className="py-4 text-sm text-left text-gray-500">
                Enter 6 digit OTP sent to your email address
              </span>
              <input
                onChange={(e) => setOTP(e.target.value)}
                className={styles.textbox}
                type="text"
                placeholder="OTP"
              />
              <button className={`mt-2 ${styles.btn}`} type="submit">
                Recovery
              </button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-gray-500">
              Can't get OTP ? {''}
              <button
                onClick={resendOTP}
                className="text-red-500"
                to="/register"
              >
                Resend Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
