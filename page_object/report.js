import Base from './page'

class ReportPage extends Base {

    get total_value_inflow() { return $('text[class="sG1fB _1UVu9"]'); }

    return_total_value_inflow() {
      return this.total_value_inflow.getText();
    }

}

export default new ReportPage();
