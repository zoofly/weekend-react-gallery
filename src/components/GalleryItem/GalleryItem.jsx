import React, {useState} from "react";
import goatPic from '/images/goat_small.jpg'

function GalleryItem({picture}){
    let [likesCount, setLikesCount]= useState(0);
    const increaseCount= () => {
        setLikesCount(likesCount + 1);
    };

    return(
        <section>
            <img src={require(`../images/${picture}.jpg`)}></img>
            <button id='likeBtn' onClick= {() => increaseCount()}>Like!</button>
            <p> Likes: {picture.likes} </p>
        </section>
    )
}

export default GalleryItem;