import { useState } from 'react';
import './Modal.scss';

const Modal = ({ closeModal }) => {
    const [formData, setFormData] = useState();
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSumbit = async (event) => {
        event.preventDefault();
        const loginData = (await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: formData,
        }));
        const res = await loginData.json();
        loginData.ok ? console.log(`Welcome ${res.name}`) : console.log('error');
    }

    return (
        <div className="modal">
            <div className="flex">
                <button className="close" onClick={() => closeModal(false)}><i class="bi bi-x"></i></button>
                <h3 className="modal__title">Login</h3>
                <p className="modal__register">New customer? <a href="https://" target="_blank" rel="noopener noreferrer">Register here</a></p>
                <span className="hr"></span>
            </div>
            <form className="form" id='form1'>
                <label htmlFor="username" className="form__label">Username</label>
                <input type="text" id='username' name='username' className="form__input" placeholder='username' onChange={handleChange} />
                <label htmlFor="password" name='password' id='password' className="form__label">Password</label>
                <input type="password" className="form__input" placeholder='password' name='password' onChange={handleChange} />
            </form>
            <div className="flex">
                <button className="form__login" type='submit' form='form1' onClick={handleSumbit}>Login</button>
                <a href="http://" target="_blank" rel="noopener noreferrer">Forgot Username/Password</a>
            </div>
        </div>
    );
};

export default Modal;
