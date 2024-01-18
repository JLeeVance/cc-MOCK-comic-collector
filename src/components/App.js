import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import React , { useState , useEffect } from "react"

function App() {

  

  const [ comics , setComics ] = useState([])
 

  useEffect(() => {
    fetch(`http://localhost:8008/comics`)
    .then(r => r.json())
    .then(setComics)
  })

  function handleNewComic(newComic){
    // console.log(newComic)
    setComics([...comics , newComic ])
  }

  function handleRemoveComic(id){
    // console.log(id)
    setComics(comics.filter((comic) => comic.id !== id))
  }


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer
          comics={comics}
          onRemoveComic={handleRemoveComic}
          />
        </div>

        <div className="sidebar">
          <ComicForm 
          onNewComic={handleNewComic} 
          
          />
        </div>

      </div>


    </div>
  );
}

export default App;
