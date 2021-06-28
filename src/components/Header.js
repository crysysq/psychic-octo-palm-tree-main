import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        marginLeft:'5rem',
        width: '90%',
        height: '80%',
    }
}
  ));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <h2>Posts</h2>
            <hr/>
        </div>
    )
}

export { Header as default }