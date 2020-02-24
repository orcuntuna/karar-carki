import React, {Fragment} from "react";
import {Icon} from "antd";
import {inject,observer} from "mobx-react";
import CreateOption from "./CreateOption";
import Option from "./Option";

@inject("store")
@observer
class Options extends React.Component{
  render() {
    return (
      <div className="options">
        <CreateOption/>
        <div className="list">
          {
            this.props.store.main.options.length ? (
                this.props.store.main.options.map(item => (
                  <Option key={item.key.toString()} item={item} />
                ))
            ) : (
              <p className="welcome">
                Karar vermek için en az 2 seçenek ekleyin
              </p>
            )
          }
        </div>
      </div>
    )
  }
}

export default Options;