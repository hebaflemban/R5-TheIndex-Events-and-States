import React from "react";


const AuthorDetail = props => {
    const authorName = `${props.author.first_name} ${props.author.last_name}`;

    let tableGenerator = () => {
    return (
        <tbody> 
            {props.books.map(column => 
                <tr>
                    <td>{column.title}</td>
                    <td>{authorName}</td>
                    <td>
                        <button className="btn" style={{backgroundColor: column.color}}/>
                    </td>
                </tr> )}
        </tbody>
    ) }
    
    return (
        <div className="author col-xs-10" >
        <div>
            <h3>{authorName}</h3>
            <img src={props.author.imageUrl} className="img-thumbnail" alt=""/>
        </div>
        
        <table className='mt-3 table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Authors</th>
                    <th>Color</th>
                </tr>
            </thead>
                {tableGenerator()}
        </table>
     </div>
    )
  }
  
  export default AuthorDetail;