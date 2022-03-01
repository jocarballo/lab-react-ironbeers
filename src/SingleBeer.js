import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";


const SingleBeer = () => {

    const { beerId } = useParams();

    const [beer, setBeer] = useState([]);

    useEffect(() => {


        //fetch the data
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                console.log(response.data)
                setBeer(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>

            <Header />
            <div>
                <img class="beer-image" src={beer.image_url} alt="Pic from the beer" />
                <div class="beer-name" >{beer.name}</div>
                <div class="beer-tagline" >{beer.tagline}</div>
                <div class="beer-firstBrewed" >{beer.first_brewed}</div>
                <div class="beer-attenuationLevel" >{beer.attenuation_level}</div>
                <div class="beer-description" >{beer.description}</div>
                <div class="beer-contributedBy" >{beer.contributed_by}</div>

            </div>
        
        </div>

    )
}


export default SingleBeer;
