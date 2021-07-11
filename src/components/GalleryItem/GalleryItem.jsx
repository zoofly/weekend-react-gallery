import React, {useState} from "react";
import "../GalleryItem/GalleryItem.css";

function GalleryItem(props){
    const [likesCount, setLikesCount] = useState(0);
    function likeHandler(id){
        console.log('likeHandeler');
        // const increaseLikes = () =>{
            setLikesCount (likesCount+1);
        }
        // likedPhoto(id);
    

    return(
        <section>
            <img src={`${props.path}`}></img>
            <br></br>
            <button id='likeBtn' onClick= {() => likeHandler(props.id)}>Like!</button>
            <p> Likes: {likesCount} </p>
        </section>
    )
}

export default GalleryItem;