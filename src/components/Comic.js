import {useState} from "react"



function Comic({
  image_url,
  issue,
  title,
  id,
  onRemoveComic
}) {

  const [ showImg , setShowImg ] = useState(true)

  function handleToggleView(){
    setShowImg(!showImg)
  }

  function handleDeleteClick(){
    // console.log(id)
    fetch(`http://localhost:8008/comics/${id}` , {
      method: "DELETE"
    })
    onRemoveComic(id)
}
  return (
    <div className="comic-item">

     { showImg ? 

      <img src={image_url} alt={title} onClick={handleToggleView} />

     :
      <>
        <h3 onClick={handleToggleView}>{title}</h3>
        <h4>{issue}</h4>
        <button onClick={handleDeleteClick}  >Remove</button>  
      </>
      }

    </div>
  )

}

export default Comic
