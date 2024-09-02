import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
   <a class="navbar-brand" href='/'> {props.title} </a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
 
   <div class="collapse navbar-collapse "    id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto w-100">
       <li class="nav-item active">
         <a class="nav-link" href='/'>Home <span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href='/'>Link</a>
       </li>
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href='/' role="button" data-toggle="dropdown" aria-expanded="false">
           Dropdown
 /</a>
         <div class="dropdown-menu">
           <a class="dropdown-item" href='/'>Action</a>
           <a class="dropdown-item" href='/'>Another action</a>
           <div class="dropdown-divider"></div>
           <a class="dropdown-item" href='/'>Something else here</a>
         </div>
       </li>
       <li class="nav-item">
         <a class="nav-link disabled">Disabled</a>
       </li>
     </ul>
     <form class="form-inline my-2 my-lg-0 bg-light" style={{width:"600px",display:'flex',gap:10,marginRight:'20px'}}>
       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
   </div>
 </nav>
  
  )
}

// Navbar.PropTypes = { 
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: 'set title here',
//     aboutText: 'About'
// };