
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './index.css';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">

            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundImage: " url('https://bloomerang.co/wp-content/uploads/2020/06/floating-book-header.png')",
        padding: theme.spacing(8, 0, 6),
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%  350px",
        color: "white"

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        // paddingTop: '56.25%', // 16:9
        paddingLeft: '100px',
        height: '200px',
        width: '150px',
        align: 'center'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Book() {
    const history = useHistory();
    const [book, setbook] = useState([{
        Name: "Wake Up And Live ",
        Author: "Author : Dorothea Brand",
        Book: "https://e3raf.org/book/wp-content/uploads/sites/3/2020/01/1579351910_-%D9%88%D8%B9%D8%B4.png"

    },
    {
        Name: "The Creative Habit: Learn It and Use It For Life",
        Author: "Author : Twyla Tharp",
        Book: "http://cdn.shopify.com/s/files/1/0584/5561/products/71G5DljGTiL._AC_UY436_QL65_ML3_large.jpg?v=1587418310"

    },
    {
        Name: "The Art of Possibility",
        Author: "Author : Rosamund Zander and Benjamin Zander",
        Book: "https://i.pinimg.com/236x/b9/30/c0/b930c0841e0ab09d275f559d6aeeff54.jpg"

    },
    {
        Name: "Stumbling on Happiness",
        Author: "Author : Dan Gilbert",
        Book: "https://m.media-amazon.com/images/I/51OOOMK5tcL.jpg"
    },
    {
        Name: "Black House",
        Author: "Author : Stephen King",
        Book: "https://images-na.ssl-images-amazon.com/images/I/61GfzoQG4lL.jpg"

    },
    {
        Name: "Heart and Soul - A Memoir",
        Author: "Author : Ali Mohammed Al Baluchi",
        Book: "https://images-na.ssl-images-amazon.com/images/I/81VsSVgBK8L.jpg"

    },
    {
        Name: "The Autobiography of Malcolm X ",
        Author: "Author : Malcolm X",
        Book: "https://images-na.ssl-images-amazon.com/images/I/81kQBRCqt-L.jpg"
    },
    {
        Name: "Hard Choices: A Memoir",
        Author: "Author : Hillary Clinton",
        Book: "https://images-na.ssl-images-amazon.com/images/I/81zzIW+nJzL.jpg"
    },
    {
        Name: "‎No. ‎1‎ Suspect, Book ‎4",
        Author: "Author : James Patterson",
        Book: "https://i.idefix.com/cache/600x600-0/originals/0000000430279-1.jpg"
    },])

    const classes = useStyles();

    // to print All book in array 
    const bookList = book.map((item, index) => {
        return (

           
                   <div class="col-md-4">
                            <center>

                            <Card className={classes.card}>
                                <center>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={item.Book}
                                    title="Image title"
                                />
                                </center>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.Name}
                                    </Typography>
                                    <Typography>
                                        {item.Author}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                            
                                    <div class="row justify-content-center">
                                            {/* <Link to="/ShowBook" className="btn btn-dark"> Read
                                            </Link> */}
                                            <Button book={book} onClick={()=> history.push("/ShowBook")}>
                                                   Read
                                            </Button>
                                        </div>
                                   
                                </CardActions>
                                </Card>
                                <br></br>
                            </center>
            </div>
        )
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography className="text " component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            <h1 id="he1">Library App</h1>
                        </Typography>
                        <Typography variant="h5" align="center" color="textPrimary" paragraph>
                            <h4 id="he1">"When in doubt go to the library."&apos;<br></br> J.K. Rowling</h4>
                        </Typography>
                    </Container>
                </div>
                <h1>Available books </h1>
                < br />
                < br/>
                <div class="row">
                   {bookList}
                    </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Library App
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Made with ❤ by Taif
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );

}
