import React, {useState} from "react";


function GalleryItem(props){
    
    return(
        <section>
            <img src={`${props.path}`}></img>
            <br></br>
            <button id='likeBtn' onClick= {() => props.likedPhoto(props.id)}>Like!</button>
            <p> Likes: {props.likes} </p>
        </section>
    )
}

export default GalleryItem;