import { observable, action } from "mobx";

class MainStore {
  @observable input_text = "";
  @observable options = [];
  @observable loading = false;
  @observable preview_text = "";
  @observable started = false;
  @observable color = "#fff";
  @observable config = "";

  @action add_option(value) {
    let key = 0;
    if (this.options.length > 0) {
      key = this.options[this.options.length - 1].key + 1;
    }
    this.options = [...this.options, { key, value }];
    this.input_text = "";
  }

  @action remove_option(key) {
    this.options = this.options.filter((item) => item.key != key);
  }

  @action remove_index_option(index) {
    this.options = this.options.filter((_, optionIndex) => {
      return optionIndex != index;
    });
  }

  @action change_input_text(value) {
    this.input_text = value;
  }

  @action change_preview(text) {
    this.preview_text = text;
  }

  @action change_color(color) {
    this.color = color;
  }

  @action start() {
    this.started = true;
  }

  @action toggle_loading() {
    this.loading = !this.loading;
  }

  @action update_item_text(key, new_text) {
    this.options.map((item, index) => {
      if (item.key == key) {
        this.options[index].value = new_text;
      }
    });
  }

  @action set_config(config) {
    this.config = config;
  }

  @action trigger_config(key) {
    if (this.config === "selected-delete") {
      this.remove_index_option(key);
    }
  }
}

const store = new MainStore();
export default store;
