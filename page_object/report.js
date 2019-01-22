import Base from './page'

class ReportPage extends Base {


    get link_report() { return $('a[href="/reports"]'); }

    open(site) {
        super.open(site);
    }

    click_link_report() {
      this.link_report.click()
    }

}

export default new ReportPage();
