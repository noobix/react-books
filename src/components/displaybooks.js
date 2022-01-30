import React from "react";

class bookDisplay extends React.Component{
    render(){
        return(<React.Fragment>
            <h4>Book List</h4>
            {this.props.books.map((books, index) => {
                return(<div key= {index}>
                    <p>{books.title}</p>
                    <p>{books.author}</p>
                    <p>{books.description}</p>
                </div>)
            })}
        </React.Fragment>)
    }
}
export default bookDisplay;