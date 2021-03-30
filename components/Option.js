import React, { Fragment } from "react";
import { Button, Icon, Input } from "antd";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Option extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="option">
          <Input
            onChange={(e) =>
              this.props.store.main.update_item_text(
                this.props.item.key,
                e.target.value
              )
            }
            size="large"
            value={this.props.item.value}
            style={{
              backgroundColor: this.props.item.disable ? "#ff4d4f" : "",
            }}
          />
          <Button
            onClick={() =>
              this.props.store.main.remove_option(this.props.item.key)
            }
            type="danger"
            icon="close"
            size="large"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Option;
