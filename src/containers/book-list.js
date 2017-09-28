import React, {Component} from 'react';



export default class BookList extends Component {
  renderList(){
    //connecting our reducer into here, so props can take from it
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'> {book.title} </li>
      )
    })
  }

  render(){
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}
