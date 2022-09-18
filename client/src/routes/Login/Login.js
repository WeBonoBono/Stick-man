import styled from 'styled-components';
import { Link } from "react-router-dom";
import loignBg from '../../assets/LoginBg.jpg';

const LoginBg = styled('div')`
    height: 100vh;
    background-image: url(${loignBg});
    background-size: cover;
`

const LoginForm = styled('div')`
    position: absolute;
    bottom: 300px;
    right: 280px;
    display: grid;
    gap: 50px;
    & > form {
        display: grid;
        grid-template-columns: 360px 130px;

        & > input {
            width: 350px;
            height: 35px;
            background-color: transparent;
            border: 0.5px solid white;
            border-radius: 15px;
            color: white; 
            font-size: 1.2rem;
        }
        & > button {
            width: 130px;
            height: 40px;
            background-color: transparent;
            color: white;
            font-size: 1.5rem;
            border: 0;
        }
    }
`

export default function Login() {
    return(
        <LoginBg >
            <LoginForm>
                <form>
                    <input  />
                    <button>Login</button>
                </form>
                <Link to={'#'}>닉네임 만들러가기 →</Link>
            </LoginForm>
        </LoginBg>
    )
}