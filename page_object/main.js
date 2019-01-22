import Base from './page'

class MainPage extends Base {

    get submit_btn() { return $('form button[type="submit"]'); }
    get category_checkbox() { return $('form select[name="categoryId"]'); }
    get description_field() { return $('form input[name="description"]'); }
    get value_field() { return $('form input[name="value"]'); }
    get main_table() { return $('table[class="opmhI"]'); }
    get total_value() { return $('div[class="sG1fB _1yrus"]'); }

    constructor() {
      super();
      var total_of_load = this.total_value.getText();
    }

    open(site) {
        super.open(site);
    }

    select_category(category) {
      this.category_checkbox.selectByVisibleText(category);
    }

    fill_description(description) {
      this.description_field.setValue(description);
    }

    fill_value(value) {
      this.value_field.setValue(value);
    }

    submit() {
      this.submit_btn.click();
    }

    find_in_table() {
      return this.main_table.getText();
    }

    return_total_value() {
      return this.total_value.getText();
    }

    return_total_value_loaded(){
      return this.total_of_load;
    }

}

export default new MainPage();
