import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const BasicPagination =  ({ postsPerPage, totalPosts, page,setCurrentPage }) => {

    const classes = useStyles();
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={classes.root}>
            <Pagination count={pageNumbers.length} 
                color="primary"
                defaultPage={1}
                onChange={(event, pageNr) => { setCurrentPage( pageNr) }}
                page={page}        
            />
        </div>
    );
}

export default BasicPagination;