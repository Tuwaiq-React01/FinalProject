import React from 'react';



export default function MyNav() {
    return (
        
<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft:"400px"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Anime</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="add">Add Anime</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    )
}
