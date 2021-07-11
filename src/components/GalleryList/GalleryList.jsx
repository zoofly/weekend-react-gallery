import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props){
    return(
        <>
            <section>
				{props.list.map(picture =>
                <GalleryItem key={picture.id} id={picture.id} path={picture.path} description={picture.description} likes={picture.likes}/>
                )}
			</section>
		</>
	)};

export default GalleryList;