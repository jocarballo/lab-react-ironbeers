import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";
import axios from 'axios'



const Beers = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {


        //fetch the data
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <div class="beers-container">
               {beers.map((beer, i) => (
                   <ul key={i} class="beer">
                        <div><img class="beer-image" src={beer.image_url} alt="" /></div>
                        <div class="beer-name" >{beer.name}</div>
                        <div class="beer-tagline">{beer.tagline}</div>
                        <div class="beer-contribute">{beer.contributed_by}</div>
                    </ul>
               ))}
            </div>
        </>
    )
}


export default Beers;