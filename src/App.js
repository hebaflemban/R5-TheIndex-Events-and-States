import React, {useState} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

function App() {

  const [currentAuthor, setCurrentAuthor] = useState(null)
  const [filteredAuthors, setFilteredAuthors] = useState(authors)

  const selectAuthor = (props) => { 
    let author = props
    setCurrentAuthor(author) };

  const refresh = () => {setCurrentAuthor(null)}

  const filterAuthors = query => { 
    let newAuthors = authors.filter(author => 
      `${author.first_name} ${author.last_name}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setFilteredAuthors(newAuthors)
    console.log("filterAuthors")
    console.log(filteredAuthors)
   }

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar refresh={refresh} />
        </div>
        <div className="content col-10">

          {
            currentAuthor ? (
              <AuthorDetail author={currentAuthor} books = {currentAuthor.books}/> 
            ) : (
              <AuthorList authors={filteredAuthors} selectAuthor={selectAuthor} filterAuthors={filterAuthors} onClick={ () => selectAuthor() }/>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default App;
