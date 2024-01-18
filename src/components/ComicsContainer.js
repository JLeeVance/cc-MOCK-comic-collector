import Comic from "./Comic"

function ComicsContainer({ comics , onRemoveComic }) {

  const comicstoRender = comics.map((comic) => <Comic key={comic.id} {...comic} onRemoveComic={onRemoveComic}  />)

  return (
    <>
      {comicstoRender}
    </>
  )

}

export default ComicsContainer
