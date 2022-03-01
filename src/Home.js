import React from "react";
import { Link } from 'react-router-dom';
import allBeersImage from './assets/beers.png'
import randomBeerImage from './assets/random-beer.png'
import newBeerImage from './assets/new-beer.png'


const Home = props => {
    

    return (
        <div>
            <div>
                <img class="allBeersImage" src={allBeersImage} alt="allBeersImage" />
                <h1><Link class="allBeersTitle" to='/beers'>All Beers</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique nisi id felis luctus, non elementum lorem malesuada. Mauris ut felis vitae metus efficitur dictum in vitae leo. Donec in ante non dui rhoncus convallis sit amet vel lacus. Proin mattis, metus a congue consequat, nisl felis molestie elit, sit amet placerat enim sem eget metus. Fusce vehicula nibh non elementum bibendum. In rhoncus nisi eros. Sed dui eros, tincidunt a mi iaculis, posuere pulvinar orci. Morbi dui nulla, tincidunt non faucibus nec, pretium ut nisi.</p>
                <img class="randomBeerImage" src={randomBeerImage} alt="randomBeerImage" />
                <h1><Link class="RandomBeerTitle" to='/random-beer'>Random Beer</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique nisi id felis luctus, non elementum lorem malesuada. Mauris ut felis vitae metus efficitur dictum in vitae leo. Donec in ante non dui rhoncus convallis sit amet vel lacus. Proin mattis, metus a congue consequat, nisl felis molestie elit, sit amet placerat enim sem eget metus. Fusce vehicula nibh non elementum bibendum. In rhoncus nisi eros. Sed dui eros, tincidunt a mi iaculis, posuere pulvinar orci. Morbi dui nulla, tincidunt non faucibus nec, pretium ut nisi.</p>
                <img class="newBeerImage" src={newBeerImage} alt="newBeerImage" />
                <h1><Link class="newBeerTitle" to='/new-beer'>New Beer</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique nisi id felis luctus, non elementum lorem malesuada. Mauris ut felis vitae metus efficitur dictum in vitae leo. Donec in ante non dui rhoncus convallis sit amet vel lacus. Proin mattis, metus a congue consequat, nisl felis molestie elit, sit amet placerat enim sem eget metus. Fusce vehicula nibh non elementum bibendum. In rhoncus nisi eros. Sed dui eros, tincidunt a mi iaculis, posuere pulvinar orci. Morbi dui nulla, tincidunt non faucibus nec, pretium ut nisi.</p>
            </div>
        </div>
    )
}



export default Home;