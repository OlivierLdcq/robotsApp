import { Component } from "react";
import Search from "./Components/Search/Search";
import Display from "./Components/Display/Display";
import Scroll from "./Components/Scroll/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      usersList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      return response.json().then((users) => {
        return this.setState({ usersList: users });
      });
    });
    console.log(this.state);
  }

  searchChanged = (e) => {
    this.setState({ searchField: e.target.value });
    //  console.log(this.state.searchField);
  };

  render() {
    const { usersList, searchField } = this.state;
    const filterdList = usersList.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <Search searchField={searchField} searchChanged={this.searchChanged} />

        <Display usersList={filterdList} />
      </div>
    );
  }
}

export default App;
