import DialogContent from "@material-ui/core/DialogContent";
import React, {useState} from "react";
import styles from './styles.module.scss';
import RButton from "../RButton";
import TextField from '@material-ui/core/TextField';
import {Dialog} from "./custom-styled";
import {useMutation} from "@apollo/client";
import {LOGIN} from "../../graphql/Mutation";
import useUser from "../../effects/useUser";


const LoginDialog = ({on, hide, showOtherDialog}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, {data, loading}] = useMutation(LOGIN);


    const handleLogin = () => {
        login({
            variables: {
                data: {
                    email,
                    password
                }
            }
        }).catch(err=>{
            // console.log(err);
        });
    }

    if (data) {
        localStorage.setItem('token', data.login.token);
        window.location.reload();
    }


    const handleSignUpClicked = () => {
        hide();
        showOtherDialog();
    }


    return <Dialog onClose={hide} aria-labelledby="customized-dialog-title" open={on}>
        <div className={styles.stepArt}/>
        <DialogContent dividers>
            <div className={styles.dialogTitle}>

                <h1 className={styles.loginLabel}>Login</h1>
                <p className={styles.agreement}>
                    By continuing, you agree to our <a>User Agreement</a> and <a>Privacy Policy</a>
                </p>

            </div>
            <div className={styles.authContainer}>
                <RButton type='Google' title='CONTINUE WITH GOOGLE'/>
                <RButton type='Apple' title='CONTINUE WITH APPLE'/>
            </div>

            <div className={styles.separatorContainer}>
                <span className={styles.separator}/>
                <span className={styles.separatorText}>OR</span>
                <span className={styles.separator}/>
            </div>
            <div className={styles.registrationForm}>
                <TextField label='USERNAME' variant="outlined" value={email}
                           onChange={(ev) => setEmail(ev.target.value)}/>
                <TextField label='PASSWORD' variant="outlined" type="password" value={password}
                           onChange={(ev) => setPassword(ev.target.value)}/>
            </div>
            <div className={styles.loginForm}>

                <RButton type='rSecondary' title='Log in' fullWidth size='L' onClick={handleLogin}/>
                <span> Forgot your <a>username</a> or <a>password</a> ?  </span>
                <span>New to Reddit? <a onClick={handleSignUpClicked}>SIGN UP</a> </span>
            </div>

        </DialogContent>
    </Dialog>;
}


export default LoginDialog;