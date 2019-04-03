import React from "react";
import "./index.scss";

const initialStateItems = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png",
    name: "Dan Abramov",
    description: "The creator of React",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

export default Root;
