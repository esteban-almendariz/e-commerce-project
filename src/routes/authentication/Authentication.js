

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utilities/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

import './Authentication.scss';

const Authentication = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }



    return (
        <div className="authentication-container">

            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;