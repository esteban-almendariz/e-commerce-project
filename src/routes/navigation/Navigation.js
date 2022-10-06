import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import './Navigation.scss'
import { signOutUser } from "../../utilities/firebase/firebase";

import { UserContext } from "../../components/contexts/UserContext";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log(currentUser)

    const signOutHandler = async () => {
        const res = await signOutHandler();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>
                    )}

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;