import React, {useState} from "react";
import "../GalleryItem/GalleryItem.css";

function GalleryItem(props){
    const [likesCount, setLikesCount] = useState(0);
    const [description, setDescription] = useState(true);


    //toggle to show or hide photo description
    const toggleDescription = () =>{
        console.log('Displaying photo description', description);
        //set state of description
        setDescription(!description);
        

    }
    

    function likeHandler(id){
        console.log('likeHandler');
        // const increaseLikes = () =>{
            setLikesCount (likesCount+1);
        }
        // likedPhoto(id);
    

    return(
        <div>
        <section className='photoGallery'>
            { !description ?
                    <p onClick={() => toggleDescription()}>{props.description}</p> :
                    <img src={`${props.path}`} onClick={() => toggleDescription()} ></img>
                }
        
            <br></br>
            <button id='likeBtn' onClick= {() => likeHandler(props.id)}>Like!</button>
            <p> Likes: {likesCount} </p>
        </section>
        </div>
    )
}

export default GalleryItem;