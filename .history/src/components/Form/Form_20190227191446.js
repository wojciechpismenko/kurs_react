import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import { type } from "os";

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
}



class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <Title>Add new favorite Twitter account</Title>
        <form autoComplete="off" className={styles.form} onSubmit={this.props.submitFn}>
          <input 
            id={types.twitter} 
            type='radio' 
            
            onChange={() => this.handleRadioButtonChange(types.twitter)} />
          <Input
            name="name"
            label="Name"
            maxLength={30}
          />
          <Input
            name="link"
            label="Twitter link"
          />
          <Input
            name="image"
            label="Image"
          />
          <Input
            tag="textarea"
            name="description"
            label="Description"
          />
          <Button>add new item</Button>
        </form>
      </div>
    )
  }
};

export default Form;
