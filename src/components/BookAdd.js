
  import { Box } from "@mui/system";
  import Form from 'react-bootstrap/Form';
  import FloatingLabel from 'react-bootstrap/FloatingLabel';
  import React, { useState } from "react";
  import Button from 'react-bootstrap/Button';
  import axios from 'axios';
  import Navbar from './Navbar.js';
  const BookAdd=()=>{
  
    const [book,setBook]=useState({
        Book_name:"",
        Book_author:"",
        Book_description:"",
        Book_price:"",
        Book_image:"",
    });
    const handlechange=(e)=>{


setBook((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
    })
);
    console.log(e.target.name, "Value", e.target.value);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const newBook={
        name:book.Book_name,
        author:book.Book_author,
        description: book.Book_description,
        price : Number(book.Book_price),
        image:book.Book_image,
   
    };
    axios.post("http://localhost:5000/books/add",newBook).then((res)=>console.log(res)).catch((err)=>console.log(err))
    alert("Books added to the list succcessfully!..");
    window.location.href="/Booklist"
    }
    return(
<>
<Navbar/>
<Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={500}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}
      >
<form onSubmit={handleSubmit}>
    
        <FloatingLabel
        controlId="floatingInput"
        label="Book Name"
        className="mb-5"
      >
        <Form.Control type="text"  placeholder="Enter Book Name" name="Book_name" value={book.Book_name} onChange={handlechange}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Author"
        className="mb-5"
      >
        <Form.Control type="text" placeholder="Enter Author Name" name="Book_author" value={book.Book_author} onChange={handlechange}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-5"
      >
        <Form.Control type="text" placeholder="Enter Description" name="Book_description" value={book.Book_description} onChange={handlechange}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Price"
        className="mb-5"
      >
        <Form.Control type="text" placeholder="Enter Price" name="Book_price" value={book.Book_price} onChange={handlechange}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Image URL"
        className="mb-4"
      >
        <Form.Control type="text" placeholder="Enter Image URL" name="Book_image" value={book.Book_image} onChange={handlechange}/>
      </FloatingLabel>
      
<div className="d-grid gap-2">
      <Button variant="outline-success" type="submit" size="md">
       Add Book To Store
      </Button>
      </div>
      </form>
      </Box>
   
</>
    )
}
export default BookAdd;