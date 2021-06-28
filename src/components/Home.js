import TitlebarGridList from './Grid.js'
import { useEffect , useState } from 'react'
import Header from './Header.js';
import Pagination from './Pagination.js'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        width: '90%',
        height: '80%',
        justifyContent:'space-between',
        flexFlow:'row wrap'
    },
    button:{
        marginLeft:'5rem'
    },
    pagination:{
        float:'right',
        padding:'0px'
    }
    

}
  ));

const Home = ()=> {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(()=> {
        loadData();
    }, [])
    //Data initialization
    const loadData = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }
    //Variable Declaration for Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Variable Declaration for Sorting
    const [sortOption, setSortOption] = useState(1)
    const sortOptions = [
        {
            label: 'Sort by #ID',
            value: 0
        }, {
            label: 'Sort by A-Z',
            value: 1
        }, {
            label: 'Sort by Z-A',
            value: 2
        }
    ];

    //Compare and filter Posts Array
    const filterPosts = (posts, sortOption)=>{
        return posts.sort((a,b)=>{
            if(sortOption === 0){
                return a.id - b.id
            } else if(sortOption ===1){
                return a.title.localeCompare(b.title)
            } else {
                return b.title.localeCompare(a.title)
            }
        })
    }
    //Counter for Sort Options
    const sortPosts =()=>{    
        let array
        if(sortOption < sortOptions.length-1){
            setSortOption(sortOption+1)
            array = filterPosts(posts,sortOption)
        } else {
            setSortOption(0)
            array = filterPosts(posts,sortOption)
        }
        setPosts(array)
    }
    const classes = useStyles();

    return (
        <div className='wrapper'>
        <Header/>            
            <div className={classes.container}>
            <Button 
            className={classes.button}
            variant="contained" 
            color="primary" 
            onClick={()=> sortPosts()}>{sortOptions[sortOption].label}
            </Button>
            <Pagination
            className={classes.pagination}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            page={currentPage}
            posts={posts}
            setPosts={setPosts}
            setCurrentPage={setCurrentPage}
            />
            </div>
            <TitlebarGridList posts={currentPosts}/>
        </div>
    )
}

export default Home