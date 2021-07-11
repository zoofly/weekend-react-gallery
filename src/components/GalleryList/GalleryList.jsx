function GalleryList (props){
    return(
		<>
        <h2>My Life in Pictures</h2>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.list.map(galleryItems => (
              <tr key={galleryItems.id}>
                <td>{galleryItems.path}</td>
                <td>{galleryItems.likes}</td>
                <td><button>Like</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
}




export default GalleryList;