import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import styles from './styles.module.scss';
import RButton from "../RButton";
import TextField from '@material-ui/core/TextField';
import { Dialog } from "./custom-styled";


const SignUpDialog = ({on, hide, showOtherDialog}) => {

    const handleLoginClicked = () => {
        hide();
        showOtherDialog();
    }

    return <Dialog onClose={hide} aria-labelledby="customized-dialog-title" open={on}>
        <div className={styles.stepArt}/>
        <DialogContent dividers>
            <div className={styles.dialogTitle}>

                <h1 className={styles.signUpLabel}>Sign up</h1>
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
                <TextField label='EMAIL' variant="outlined"/>
            </div>
            <div className={styles.loginForm}>

                <RButton type='rSecondary' title='Continue' fullWidth size='L'/>
                <span>Already a redditor? <a onClick={handleLoginClicked}>Log in</a> </span>
            </div>

        </DialogContent>
    </Dialog>;
}


export default SignUpDialog;