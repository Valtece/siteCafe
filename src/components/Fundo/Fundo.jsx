import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vector from "./vector.svg";
import star from "./Star.svg";
import StarFill from "./Star_fill.svg";
import './Fundo.css'
import backgroundImage from "./backgroundImage.jpg";


export default function Fundo(){
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, [])



  return(
    <div class="bg-custom">
      <section style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "100%",
      }}>
      </section>
      <div class="">
      <section class='text-center custom p-5 bg-color container-xxl rounded-3'>
        <div style={{
              backgroundImage: `url(${vector})`,
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              width: "100%",
              }}>
          <h1>Our Collection</h1>
          <p class='p-custom text-center'>
            Introducing our Coffee Collection, a selection of unique coffees <br/> 
            from different roast types and origins, expertly roasted in small <br/>
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className='d-flex justify-content-center'>
          <button  type="button" class="btn btn-secondary me-2">All Products</button>
          <button type="button" class="btn ms-2">Available Now</button>
        </div>
        <ul className=' d-flex flex-row justify-content-center p-0 mt-5 row row-cols-1 row-cols-md-2 g-0 '>
          {coffees.map(coffee => (
            <li className="card m-4 border-0 bg-transparent position-relative" style={{ width: '18rem' }} key={coffee.id}>
              {coffee.popular === true ? 
                <div className='position-absolute popular-custom py-1 px-2 m-2 rounded-4'>
                  <p className='m-0'>Popular</p>
                </div> : ''
              }
              <img className="rounded-3" src={coffee.image} alt={coffee.name} style={{ width: '100%', height: '100%' }} />
              <div className="card-body d-flex justify-content-between align-items-center px-0 py-2">
               <p className='cor-name m-0'>{coffee.name}</p>
               <div className='box-price align-items-center justify-content-center rounded-1 px-2'>
                <p className='m-0 price'>{coffee.price}</p>
               </div>
              </div>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={coffee.rating === null ? star : StarFill} alt="Rating Star" />
                <p className='color-rating m-0 mx-1'> {coffee.rating} </p>
                <p className='color-votes m-0'> {coffee.votes ? '(' + coffee.votes + ' votes)' : 'No ratings'} </p>
                {coffee.available === true ? 
                  '' : 
                  <p className='m-0 sold-out'>Sold Out</p> } 
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  )
}