import { useForm } from 'react-hook-form';
import './Modal.scss';

const Modal = ({ closeModal, color }) => {

    //useform hook for form data
    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {
        username: "",
        password: ""
    }});

    //post request form data on login endpoint
    const onSubmit = async (data) => {
        const loginData = (await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: data,
        }));
        const res = await loginData.json();
        loginData.ok ? console.log(`Welcome ${res.name}`) : console.log('error');
    }

    return (
        <div className="modal">
            <div className="flex">
                <button className="close" onClick={() => closeModal(false)}><i class="bi bi-x"></i></button>
                <h3 className="modal__title">Login</h3>
                <p className="modal__register">New customer? <a href="https://" style={{color: color}} target="_blank" rel="noopener noreferrer">Register here</a></p>
                <span className="hr"></span>
            </div>
            <form className="form" id='form1' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username" className="form__label">Username</label>
                <input type="text" id='username'{
                    ...register('username', {
                        required: 'username is required',
                        minLength: { value: 4, message: 'minimum of 4 characters' }
                    })}
                    className="form__input" placeholder='username' />
                    <p className='error'>{errors?.username?.message}</p>
                <label htmlFor="password" name='password' id='password' className="form__label">Password</label>
                <input type="password" className="form__input" placeholder='password'{
                    ...register('password', {
                        required: 'password is required',
                        minLength: { value: 8, message: 'minimum of 8 characters' }
                    })} />
                    <p className='error'>{errors?.password?.message}</p>
            </form>
            <div className="flex">
                <button style={{backgroundColor: color}} className="form__login" type='submit' form='form1'>Login</button>
                <a href="http://" target="_blank" rel="noopener noreferrer" style={{color: color}}>Forgot Username/Password</a>
            </div>
        </div>
    );
};

export default Modal;
