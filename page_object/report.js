import Base from './page'

class ReportPage extends Base {

    get total_value_inflow() { return $('g text[class="_1UVu9"]'); }

    return_total_value_inflow() {
      return this.total_value_inflow.getText();
    }

    wait() {
      super.wait();
    }

}

export default new ReportPage();
