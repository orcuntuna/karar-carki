import React, {Fragment} from "react";
import {Icon} from "antd";
import {inject, observer} from "mobx-react";

const colors = [
  "#00a8ff",
  "#0097e6",
  "#e84118",
  "#c23616",
  "#9c88ff",
  "#8c7ae6",
  "#e1b12c",
  "#718093",
  "#4cd137",
  "#44bd32",
  "#273c75",
  "#192a56",
  "#40739e",
  "#487eb0",
  "#353b48",
  "#2f3640",
];

@inject("store")
@observer
class Results extends React.Component{
  onPressGenerate(){
    if(this.props.store.main.options.length > 1){
      let counter = 0;
      this.props.store.main.start();
      this.props.store.main.toggle_loading();
      let preview_timer = setInterval(function () {
        if(counter < 10){
          const random_item = this.props.store.main.options[Math.floor(Math.random() * this.props.store.main.options.length)]
          const random_color = colors[Math.floor(Math.random() * colors.length)]
          console.log(random_item.value);
          this.props.store.main.change_color(random_color);
          this.props.store.main.change_preview(random_item.value);
          counter++;
        }else{
          this.props.store.main.toggle_loading();
          clearInterval(preview_timer);
        }
      }.bind(this), 150);
    }else{
      alert("Lütfen en az 2 seçenek giriniz!");
    }
  }
  render() {
    return (
      <div className="results">
        <div className="result-box" style={{backgroundColor: this.props.store.main.color}}>
          { /*  */ }
          {
            this.props.store.main.started ? (
              <div>
                {this.props.store.main.preview_text}
              </div>
            ) : (
              <Icon style={{fontSize: 100}} type="question-circle" />
            )
          }
        </div>
        <button
          onClick={() => this.onPressGenerate()}
          className="generate">
          Karar Ver!
        </button>
      </div>
    );
  }
}

export default Results;