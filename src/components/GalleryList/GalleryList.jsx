
function GalleryList(props){
    return(
        <>
        <h2>My Life In Pictures</h2>
		  <table>
			<thead>
			  <tr>
				<th>Pictures</th>
			  </tr>
			</thead>
			<tbody>
			  {props.list.map(pictures => (
				<tr key={pictures.id}>
				  <td>{pictures.item}</td>
				  <td>{pictures.quantity}</td>
				  <td>{pictures.unit}</td>
				  <td><button>Buy</button></td>
				  <td><button>Remove</button></td>
				</tr>
			  ))}
			</tbody>
		  </table>
        </>
    )
}





export default GalleryList;