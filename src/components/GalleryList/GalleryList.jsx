function GalleryList (props){
    return(
        <div>
        <h2>My Life in Pictures</h2>
            {props.list.map(galleryItems =>
            <section>
                <p> key={galleryItems.id}</p>
                <p>{galleryItems.path}</p>
                <p>{galleryItems.likes}</p>
                <p><button>Like</button></p>
            </section>
        </div>
        )}
 }




export default GalleryList;