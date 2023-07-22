
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from './Navbar.js'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Modal from 'react-bootstrap/Modal';
import Grid from '@mui/material/Grid';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme,  } from '@mui/material/styles';
import {useState,useEffect} from 'react';

import axios from 'axios';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();



const Booklist=()=>{
const [booklist,setBooklist]=useState([]);
const [show, setShow] = useState(false);
const [checked, setChecked] = useState(false);
const [updateBook,setUpdatebook]=useState([]);
const [open,setOpen]=useState(false)
const[specificBook,setSpecificbook]=useState([])
useEffect(() => {
    axios
      .get("http://localhost:5000/books/")
      .then((res) => setBooklist(res.data.books))
      .catch((err) => console.log(err));
  }, []);
const handleDelete=(id)=>{
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
const handleView=(id)=>{
setOpen(true);
axios.get(`http://localhost:5000/books/${id}`).then((res)=>{console.log(res.data.book);setSpecificbook(res.data.book)}).catch((err)=>console.log(err))
}

const handleShut=()=>setOpen(false);
const handleClose = () => setShow(false);
const handleShow = (id) => {
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
const handleSubmit=()=>{
  
  console.log("hi")
  const newBook={
      name:updateBook.name,
      author:updateBook.author,
      description: updateBook.description,
      price : Number(updateBook.price),
      image:updateBook.image,
      available: Boolean(checked),
  };
  axios.put(`http://localhost:5000/books/${updateBook._id}`,newBook).then((res)=>console.log(res)).catch((err)=>console.log(err))
  alert("Books updated to the list succcessfully!..");
 window.location.href='/Booklist'
  }


    return(
<>
<Navbar/>
<Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {booklist.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card key={card._id}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" style={{fontSize:'16px',fontWeight:'600'}} component="h2">
                   {card.name}
                    </Typography>
                    <Typography style={{fontSize:'12px'}}>
                    {card.description.slice(0,100)}...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>handleDelete(card._id)}>Delete</Button>
                    <Button size="small" onClick={()=>handleShow(card._id)}>Edit</Button>
                  <Button size="small" onClick={()=>handleView(card._id)}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      }
      label="Available"
    />
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
      <Modal show={open} onHide={handleShut}>
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
           B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={specificBook.name}
        subheader={specificBook.author}
      />
      <CardMedia
        component="img"
        height="194"
        image={specificBook.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" className="mb-4" color="text.secondary">
        {specificBook.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      Price: $  {specificBook.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        </CardActions>
          </Card>
 </Modal.Body>
      
      </Modal>
        </Container>
</>
    )
}
export default Booklist;