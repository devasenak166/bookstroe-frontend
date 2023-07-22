import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography'
const image = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
export default function BasicCard() {
 
    const handleAdmin=(e)=>{
        e.preventDefault();
        window.location='/Admin';
    }
    const handleBookadd=(e)=>{
        e.preventDefault();
        window.location='/BookAdd';
    }
    const handleBooklist=(e)=>{
        e.preventDefault();
        window.location='/Booklist';
    }
    const handleBookupdate=(e)=>{
        e.preventDefault();
        window.location='/BookUpdate';
    }
  return (
    <div style={{  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', background:' rgb(138,75,201)',
    background: 'linear-gradient(90deg, rgba(138,75,201,1) 0%, rgba(244,119,208,1) 61%)',minHeight:'100vh'}}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
      
        }}
      >
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <div style={image}>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                width="100"
                height="100"
              />
              <Typography variant="h6" color="text.secondary" component="div">
                Admin Profile
              </Typography>
            </div>

            <Typography variant="body2" class="mt-3">
              Kindly please use this card to route for the admin profile details...
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <div className="d-grid gap-2 col-12">
      <Button variant="outline-success" size="sm" onClick={handleAdmin}>
        Route
      </Button>
      </div>
      </CardActions>
      </Card>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <div style={image}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaeSV1IVkL-1EZInOC_Qa4wxKQKH6bwM1qAcvy5bm0iFLvJOCVx10qCSTcIDD2DjQj1Q&usqp=CAU"
                width="100"
                height="100"
              />
              <Typography variant="h6" color="text.secondary" component="div">
                BookList
              </Typography>
            </div>

            <Typography variant="body2" class="mt-3">
              Kindly please use this card to route for List of Books you want to see...
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <div className="d-grid gap-2 col-12">
      <Button variant="outline-success" size="sm" onClick={handleBooklist}>
      Route
      </Button>
      </div>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <div style={image}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqX_IsM9zZgB0dTkfrRMMrtjRUgNzcbCujqpppG8fPJJfl7o4GiWJEV2ZWmklYAUPSksc&usqp=CAU"
                width="100"
                height="100"
              />
              <Typography variant="h6" color="text.secondary" component="div">
                Book Upload
              </Typography>
            </div>

            <Typography variant="body2" class="mt-3">
              Kindly please use this card to route for  add some of the books to the list...
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <div className="d-grid gap-2 col-12">
      <Button variant="outline-success" size="sm" onClick={handleBookadd}>
      Route
      </Button>
      </div>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <div style={image}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEG_b5OyvY3OimNc1eYRilyYuz7vHfT9PIQ&usqp=CAU"
                width="100"
                height="100"
              />
              <Typography variant="h6" color="text.secondary" component="div">
                Book Update/Delete
              </Typography>
            </div>

            <Typography variant="body2" class="mt-3">
              Kindly please use this card to route for the books update or delete...
              <br />
            </Typography>
          </CardContent>
          <CardActions>
          <div className="d-grid gap-2 col-12">
      <Button variant="outline-success" size="sm" onClick={handleBookupdate}>
      Route
      </Button>
      </div>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

