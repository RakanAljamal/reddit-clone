import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import styles from './styles.module.scss';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import RButton from "../RButton";

const LoginDialog = ({on, hide}) => {


    const useStyles = makeStyles(() => ({
        root: {
            '& .MuiDialog-paperWidthSm': {maxWidth:'850px'},
            '& .MuiList-padding': { paddingTop: '0px', paddingBottom: '0px' },
            '& .MuiList-root': { display: 'block' },
            '& .MuiListItem-root': { padding: 0 },
            '& .MuiPaper-root': { display:'flex',flexDirection:'row' }
        }
    }));

    const classes = useStyles();


    const DialogContent = withStyles((theme) => ({
        root: {
            display:"flex",
            flexDirection:'column',
            justifyContent:"space-around",
            height: '650px',
            width: '850px'
        },
    }))(MuiDialogContent);

    return <Dialog onClose={hide} aria-labelledby="customized-dialog-title" open={on} className={classes.root}>
        <div className={styles.stepArt} />
        <DialogContent dividers>
            <Typography gutterBottom>
                Login
            </Typography>
            <Typography>
                <span>By continuing, you agree to our User Agreement and Privacy Policy </span>
            </Typography>
            <Typography>
                <RButton type='rPrimary' title='sign in'/>
                <RButton type='rPrimary' title='sign in'/>
            </Typography>
            <Typography>
                Or
            </Typography>
            <Typography>
                <RButton type='rSecondary' title='Log in' fullWidth/>
            </Typography>
            <Typography>
                Forgot your username or password ?
            </Typography>
            <Typography>
                New to Reddit? SIGN UP
            </Typography>
            
            
        </DialogContent>
    </Dialog>;
}


export default LoginDialog;