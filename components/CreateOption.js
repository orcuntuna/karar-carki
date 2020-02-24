import React, {Fragment} from "react";
import {Icon, Input, Button} from "antd";
import {inject, observer} from "mobx-react";

@inject("store")
@observer
class CreateOption extends React.Component{
  onSubmitForm(e){
    e.preventDefault();
    this.props.store.main.add_option(this.props.store.main.input_text);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Karar Çarkı</h1>
        <h2>Arada Derede Kalma Diye!</h2>
        <form onSubmit={(e) => this.onSubmitForm(e)} className="option create-option">
          <Input
            onChange={e => this.props.store.main.change_input_text(e.target.value)}
            value={this.props.store.main.input_text}
            size="large"
            placeholder="Seçeneklerden birini giriniz.."
          />
          <Button
            onClick={(e) => this.onSubmitForm(e)}
            type="default"
            icon="plus"
            size="large"
          />
        </form>
      </React.Fragment>
    )
  }
}

export default CreateOption;