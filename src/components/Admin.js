import image from '../image/devasena-photo (1).jpg'
import Navbar from './Navbar';
const Admin=()=>{

    return(
<>
<Navbar/>
<div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Devasena kittusamy <br/> Full stack developer</h1>
        <p class="lead">A recent graduate with a Bachelor's degree in Information Technology . With a solid academic record, including an impressive 8.3 GPA, I am driven to excel in the IT industry. I have a strong foundation in web development, with expertise in HTML, CSS, JavaScript, jQuery, Firebase, and React. Additionally, I have knowledge of Python and Java basics, allowing me to adapt to diverse project requirements.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold">Explore</button>
         
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={image} alt="" width="320"/>
      </div>
    </div>
  </div>
</>
    )
}
export default Admin;