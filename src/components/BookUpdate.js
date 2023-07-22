
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const defaultTheme = createTheme();

const BookUpdate=()=>{
    const [id,setId]=useState();
    const [show, setShow] = useState(false);

const [updateBook,setUpdatebook]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        axios.get(`http://localhost:5000/books/${id}`).then((res)=>{console.log(res.data.book);setUpdatebook(res.data.book)}).catch((err)=>console.log(err))
    }
    const handlechange=(e)=>{
    setUpdatebook((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            })
        );
            console.log(e.target.name, "Value", e.target.value);
        }
  
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("hi")
    const newBook={
        name:updateBook.name,
        author:updateBook.author,
        description: updateBook.description,
        price : Number(updateBook.price),
        image:updateBook.image,
       
    };
    axios.put(`http://localhost:5000/books/${id}`,newBook).then((res)=>console.log(res)).catch((err)=>console.log(err))
    alert("Books updated to the list succcessfully!..");
    window.location.href="/Booklist"
    }
    const handleDelete=()=>{
        if (window.confirm("Are you sure to delete the post?")) {
            axios.delete(`http://localhost:5000/books/${id}`)
            .then((response) => {
          
              console.log(response);
              alert("wow! Book deleted successfully")
              window.location='/Booklist'
            })
            .catch((error) => {
            alert("Oops! something went wrong")
              console.error( error);
            });

        }
    }

    return(
     
<ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <ArrowBackIcon sx={{ mr: 2 }} onClick={(e)=>{e.preventDefault();window.location.href='/'}}/>
          
          <Typography variant="h6" color="inherit" noWrap>
        Book Store
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            Boooks Update or Delete
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. <br/>If you want to update or delete the book by using the cards...and you don't know the Book unique id then you definitely go to this way of edit/delete.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={(e)=>{e.preventDefault();window.location.href='/Booklist'}}>Edit</Button>
              <Button variant="contained" onClick={(e)=>{e.preventDefault();window.location.href='/Booklist'}}>Delete</Button>
            </Stack>
          </Container>
          </Box>

          </main>
          <hr/>
          <Stack
              sx={{ pt: 4,pb:3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                 <Typography variant="h6" align="center" color="text.secondary" className="col-6" paragraph>
           If you want to update or delete the book by using the book specific id...and you know the Book unique id then you definitely go to this way of edit/delete.
            </Typography>
            </Stack>
      
          <Container className="shadow mb-5 bg-tertiary rounded" component="main" maxWidth="xs" >
         
        <CssBaseline />
        <Box  
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <BrowserUpdatedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Edit/Delete
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="Book Id"
                  name="id"
                  autoComplete="id"
                  onChange={(e)=>{e.preventDefault();setId(e.target.value)}}
                />
              </Grid>
           
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to Update or Delete the Book sure!.."
                />
              </Grid>
            </Grid>
            <Stack
              sx={{ pt: 4,pb:3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"  onClick={handleShow}>Edit</Button>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
    
    <FloatingLabel
    controlId="floatingInput"
    label="Book Name"
    className="mb-5"
  >
    <Form.Control type="text"  placeholder="Enter Book Name" name="name" value={updateBook.name} onChange={handlechange}/>
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Author"
    className="mb-5"
  >
    <Form.Control type="text" placeholder="Enter Author Name" name="author" value={updateBook.author} onChange={handlechange}/>
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Description"
    className="mb-5"
  >
    <Form.Control type="text" placeholder="Enter Description" name="description" value={updateBook.description} onChange={handlechange}/>
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Price"
    className="mb-5"
  >
    <Form.Control type="text" placeholder="Enter Price" name="price" value={updateBook.price} onChange={handlechange}/>
  </FloatingLabel>
  <FloatingLabel
    controlId="floatingInput"
    label="Image URL"
    className="mb-4"
  >
    <Form.Control type="text" placeholder="Enter Image URL" name="image" value={updateBook.image} onChange={handlechange}/>
  </FloatingLabel>
   
  <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>{"     "}
          <Button variant="contained" type="submit"  >
            Update Book
          </Button>
          </Stack>
</form>

 </Modal.Body>
      
      </Modal>
              <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </Stack>
          
          </Box>
        </Box>
       
      </Container>
      </ThemeProvider>
    )
}
export default BookUpdate;