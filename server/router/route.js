import { Router } from 'express';
const router = Router();

/** import all controllers **/
import * as controller from '../controllers/appController.js';
/** POST METHOD **/
router.route('/register').post(controller.register);
router.route('registerMail').post(controller.registerMail); //send the email
router.route('authentication').post((req, res) => res.end()); //authenticate user
router.route('/login').post(controller.verifyUser, controller.login); //login in app

/** GET METHOD **/
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateOTP').get(controller.generateOTP); // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP); // verify generate OTP
router.route('/createResetSession').get(controller.createResetSession); // reset all variables

/** PUT METHOD **/
router.route('/updateUser').put(controller.updateUser); //is use to update the user profile
router.route('/resetPassword').put(controller.register); // use to reset password

export default router;