import React from 'react';
import './Content.css';
const Content =({title,image,description})=>{
    return (
        
        <section className="container">
            <div class="card">
            
                <h1 className="cards-title" >{title}</h1>
                <img src={image} alt="anime"className="img" />
      
                <p>
  <a className='button' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   more
  </a>

</p>
<div class="collapse" id="collapseExample">
  <div>
    {description}
  </div>
</div>
       
                    
         
            </div>
        </section>
    )
}



export default Content;