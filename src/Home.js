import React from "react";
import { Link } from 'react-router-dom';



const Home = props => {
    

    return (
        <div>
            <div>
                <p><Link to='/beers'>All Beers</Link></p>
                <p><Link to='/random-beer'>Random Beer</Link></p>
                <p><Link to='/new-beer'>New Beer</Link></p>
            </div>
        </div>
    )
}



export default Home;