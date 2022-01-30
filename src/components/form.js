import React from 'react';

class form extends React.Component{
    constructor(){
        super();
        this.state= {title: "", author: "", description: ""};
    }
    handleTitleChange = (e) => {
        this.setState({name: e.target.value});
    }
    handleAuthorChange = (e) => {
        this.setState({author: e.target.value});
    }
    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let newBook = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        };
        this.props.addBook(newBook);
    }
    render(){
        return(<React.Fragment>
            <form onSubmit={this.handleSubmit}>
                {/* <label name="label1">Title</label> */}
                <input name="title" type="text" placeholder="Title"
                value={this.title} onChange={this.handleTitleChange}/>
                {/* <label name="label2">Author</label> */}
                <input name="author" type="text" placeholder="Author"
                value={this.author} onChange={this.handleAuthorChange}/>
                {/* <label name="label3">Description</label> */}
                <input name="description" type="text" placeholder="Description"
                value={this.description} onChange={this.handleDescriptionChange}/>
                <input name="Button" type="submit" Value="Submit" />
            </form>
        </React.Fragment>);
    }
}
export default form;