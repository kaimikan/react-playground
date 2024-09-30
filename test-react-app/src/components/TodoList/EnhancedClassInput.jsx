import { Component } from 'react';
import Count from './Count'; // Ensure to import the Count component

class EnhancedClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: '',
      editingIndex: null, // Track which todo is being edited
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todos, inputVal, editingIndex } = this.state;

    if (editingIndex !== null) {
      // Update existing todo if in editing mode
      const updatedTodos = todos.map((todo, index) =>
        index === editingIndex ? inputVal : todo
      );
      this.setState({
        todos: updatedTodos,
        inputVal: '',
        editingIndex: null, // Reset editing index
      });
    } else {
      // Add new todo
      this.setState((state) => ({
        todos: state.todos.concat(state.inputVal),
        inputVal: '',
      }));
    }
  }

  handleDelete(index) {
    this.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index), // Remove the specific todo
    }));
  }

  handleEdit(index) {
    this.setState({
      inputVal: this.state.todos[index], // Set inputVal to the todo being edited
      editingIndex: index, // Set the index for editing
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            {this.state.editingIndex !== null ? 'Resubmit' : 'Submit'}
          </button>
        </form>
        <Count count={this.state.todos.length} /> {/* Display count of todos */}
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo}>
              {todo}
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => this.handleEdit(index)}
              >
                Edit
              </button>
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default EnhancedClassInput;
