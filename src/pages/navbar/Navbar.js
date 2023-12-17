import {Link} from "react-router-dom";
import Login from "../register/Login";
import {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import LoginFormModal from "../register/Login";
import Signup from "../register/Signup";
import SignUpFormModal from "../register/Signup";

const Navabar = () => {
    const [showSignFormModal, setShowSignFormModal] = useState(false);
    const [showLoginFormModal, setShowLoginFormModal] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const handleShowLoginFormModal = () => {
        setShowSignFormModal(false);
        handleShow(true);

    };
    const handleShow = (event) => {
        setShowLoginFormModal(event);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setShowLoginFormModal(false);
        // انجام عملیات دیگر با اطلاعات کاربر
    };
//signing
    const handleShowSign = (event) => {
        setShowSignFormModal(event);
    }
    const handleShowSignFormModal = () => {
        handleShow(false);
        setShowSignFormModal(true);
    };
    const handleSignFormSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setShowLoginFormModal(false);
        // انجام عملیات دیگر با اطلاعات کاربر
    };


    return (
/*        <nav className="navbar">
            <h1>This first Navabar</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">create</Link>

            </div>
        </nav>*/
<div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow " data-bs-theme="white">
        <div className="container  ">
            <a className="navbar-brand" href="#">آچار</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item px-2">
                        <Link className="nav-link active" to="/">خانه</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link btn" to="/create">create</Link>
                    </li>
                    <li className="nav-item btn-primary px-2">
                        <Button onClick={handleShowLoginFormModal}>ورود</Button>

                    </li>
                    <li className="nav-item btn-primary px-2">
                        <Button onClick={handleShowSignFormModal}>ثبت نام</Button>

                    </li>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            پیکر بندی
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/DefineAndEditSection">Action</Link></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    <div>
            <LoginFormModal  show={showLoginFormModal}
                             handleShow={handleShow}
                             onSubmit={handleLoginFormSubmit}
                             onUsernameChange={handleUsernameChange}
                             onPasswordChange={handlePasswordChange}
                             signup={handleShowSignFormModal}
            />
        </div>
    <div>
        <SignUpFormModal show={showSignFormModal}
                         handleShow={handleShowSign}
                         onSubmit={handleSignFormSubmit}
                         onUsernameChange={handleUsernameChange}
                         onPasswordChange={handlePasswordChange}
                         login={handleShowLoginFormModal}
        />
    </div>
</div>

     );
}

export default Navabar;