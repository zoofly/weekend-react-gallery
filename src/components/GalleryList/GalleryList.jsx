import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props){
    return(
        <>
            <section>
				{props.list.map(picture =>
                <GalleryItem key={picture.id} />
                )}
			</section>
		</>
	)};

export default GalleryList;