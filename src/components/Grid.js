import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        fontFamily: 'sans-serif'
        
    },
    gridList: {
        width: '90%',
        height: '80%',
        
    },
    gridTile: {
        borderRadius: '10px',
        margin: '0.25rem',
        padding: '0.25rem',
        backgroundColor: '#f0f0f5',
        flex: '21%'
    },
    gridTitle: {
        wordBreak: 'break-all',
        textAlign: 'left',
        padding:'0.5rem'
    },
    gridBody: {
        textAlign:'justify',
        padding:'0.5rem'
    }
  }));


const TitlebarGridList = ({posts}) => {
const classes = useStyles();

return (
    <div className={classes.root}>
        <GridList cellHeight={'auto'} cols={4} className={classes.gridList}>
        {posts.map((post) => (
        <GridListTile key={post.id} className ={classes.gridTile}>
        <h4 className={classes.gridTitle}>{post.id}. {post.title}</h4>
        <p className={classes.gridBody}>{post.body}</p> 
        </GridListTile>
        ))}
        </GridList>
        </div>
)}

export default TitlebarGridList
