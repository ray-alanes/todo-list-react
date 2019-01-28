import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {

    return (

      <div className="todoListMain">

      <header>
        
        <nav>
          <ul>
              <li><a href="#">menu</a></li>
              <li><a href="#">repo</a></li>
              <li><a href="#">tutos</a></li>
          </ul>
        </nav>

      </header>


      <div className="section">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Para hacer ..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Agregar tarea </button>
          </form>
        </div>
      </div>

      </div>
    )
  }
}

export default TodoList
