import {useState} from "react"

function ComicForm({ onNewComic }) {

  const initialFormState={ 
    image_url: "",
    title: "",
    issue: ""
  }

  const [ formData , setFormData ] = useState(initialFormState)

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleComicSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8008/comics` , {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        ...formData,
        issue: parseInt(formData.issue)
      })
    })
    .then(r => r.json())
    .then(onNewComic)
    setFormData(initialFormState)
  }
  

  return (

    <form className="comic-form" onSubmit={handleComicSubmit} >

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input onChange={handleForm} value={formData.image_url} name="image_url" />

      <label htmlFor="title">Title: </label>
      <input onChange={handleForm} value={formData.title} name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input onChange={handleForm} value={formData.issue} name="issue" type="number" />

      {/* <label htmlFor="description">Description: </label>
      <input name="description" /> */}

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
