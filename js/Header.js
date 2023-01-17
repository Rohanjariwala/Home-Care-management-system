class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header_top">
            <div class="row">
                <div class="col-md-6">
                    <a href="../">
                        <img src="../images/logo.png" alt="Home care management system" title="Home care management system"/>
                    </a>
                </div>
                <div class="col-md-6 d-flex justify-content-end align-items-center">
                    <a href="../login.html" class="primary_btn">Login</a>
                </div>
            </div>
        </div>
        <nav id="nav_menu">
          <ul class="d-flex flex-wrap justify-content-center">
            <li><a href="../Home-Care-management-system/" class="nav_links has_arrow ">Home</a></li>
            <li><a href="../Home-Care-management-system/clients.html" class="nav_links">Clients</a></li>
            <li><a href="../Home-Care-management-system/providers.html" class="nav_links">Providers</a></li>
            <li>
                <a href="../prior-authorizations.html" class="nav_links has_arrow">Prior Authorizations</a>
                <ul class="Inner_menu">
                  <li><a href="../patient-assessments.html">Patient Assessments</a></li>
                </ul>
            </li>
            <li>
                <a href="../placements.html" class="nav_links has_arrow">Placements</a>
                <ul class="Inner_menu">
                  <li><a href="../problem-providers.html">Problem Providers</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav_links has_arrow">Accounting</a>
                <ul class="Inner_menu">
                  <li><a href="../account-Payable.html">Account Payable</a></li>
                  <li><a href="../account-receivable.html">Accounts Receivable</a></li>
                </ul>
            </li>
            <li>
                <a href="../billing.html" class="nav_links has_arrow">Billing</a>
                <ul class="Inner_menu">
                  <li><a href="../billing-batch.html">Billing Batch</a></li>
                  <li><a href="../billing-print-batch.html">Billing Print Batch</a></li>
                </ul>
            </li>
            <li><a href="#" class="nav_links has_arrow">Reports</a>
                <ul class="Inner_menu">
                  <li><a href="../activity-report.html">Activity Report</a></li>
                  <li><a href="../emergency-report.html">Emergency Report</a></li>
                  <li><a href="../provider-schedule-update-report.html">Provider Schedule Update Report</a></li>
                  <li><a href="../Missing-time-sheet-report.html">Missing Time Sheet Report</a></li>
                  <li><a href="../time-sheet-report.html">Time Sheet Report</a></li>
                  <li><a href="../potential-fraud-report.html">Potential Fraud Report</a></li>
                  <li><a href="../pa-report.html">PA Report</a></li>
                  <li><a href="../bulk-emails-report.html">Bulk Emails Report</a></li>
                  <li><a href="../marketing-report.html">Marketing Report</a></li>
                  <li><a href="../login-report.html">Login Report</a></li>
                  <li><a href="../financial-report.html">Financial Report</a></li>
                  <li><a href="../debts-report.html">Debts Report</a></li>
                  <li><a href="../employee-summary-report.html">Employee Summary Report</a></li>
                </ul>
            </li>
            <li><a href="#" class="nav_links has_arrow">Setup</a></li>
            <li><a href="#" class="nav_links has_arrow">Security</a></li>
            <li><a href="#" class="nav_links has_arrow">Audit</a></li>
            <li><a href="#" class="nav_links has_arrow">Feedback</a></li>
          </ul>
        </nav>
        <div class="header_bottom d-flex justify-content-between">
            <div class="date">Friday, December 9, 2022</div>
            <div class="name"><a href="#" style="text-decoration:underline; color:var(--p_blue):">Mohammad Waleed</a></div>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
