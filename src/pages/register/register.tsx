import image from '../../assets/Design sem nome (1).png'
import { Button } from '../../components/button/button'
import { Footer } from '../../components/footer/footer'
import './register.css'

export function Register() {
    return (
        <div className='container'>
            <div className="container-register">
                <h1>Make Your Account Here</h1>
                <form action="" method="post">
                    <input type="text" name='first_name' placeholder='First Name' />
                    <input type="text" name='last_name' placeholder='Last Name' />
                    <input type="email" name='email' placeholder='E-mail' />
                    <input type="password" name='password' placeholder='Password' />
                    <input type="password" name='confirm_password' placeholder='Confirm Your Password' />
                    <div className="button-submit">
                        <Button text='Create Account' />
                        <a href="">Do you have an account? Click here.</a>
                    </div>
                </form>
            </div>

            <div className="container-image">
                <img src={image} alt="" />
                <div className="container-text">
                    <h1>Fast, secure, and reliable transactions in one place.</h1>
                </div>
            </div>

            <Footer />
        </div>
    )
}