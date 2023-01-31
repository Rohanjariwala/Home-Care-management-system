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
            <li><a href="../" class="nav_links has_arrow ">Home</a></li>
            <li><a href="../clients.html" class="nav_links">Clients</a></li>
            <li><a href="../providers.html" class="nav_links">Providers</a></li>
            <li>
                <a href="../prior-authorizations.html" class="nav_links has_arrow">Prior Authorizations</a>
                <ul class="Inner_menu">
                  <li><a href="../prior-authorizations/patient-assessments.html">Patient Assessments</a></li>
                </ul>
            </li>
            <li>
                <a href="../placements.html" class="nav_links has_arrow">Placements</a>
                <ul class="Inner_menu">
                  <li><a href="../placements/problem-providers.html">Problem Providers</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav_links has_arrow">Accounting</a>
                <ul class="Inner_menu">
                  <li><a href="../accounting/account-Payable.html">Account Payable</a></li>
                  <li><a href="../accounting/account-receivable.html">Accounts Receivable</a></li>
                </ul>
            </li>
            <li>
                <a href="../billing.html" class="nav_links has_arrow">Billing</a>
                <ul class="Inner_menu">
                  <li><a href="../billing/billing-batch.html">Billing Batch</a></li>
                  <li><a href="../billing/billing-print-batch.html">Billing Print Batch</a></li>
                </ul>
            </li>
            <li><a href="#" class="nav_links has_arrow">Reports</a>
                <ul class="Inner_menu">
                  <li><a href="../reports/activity-report.html">Activity Report</a></li>
                  <li><a href="../reports/emergency-report.html">Emergency Report</a></li>
                  <li><a href="../reports/provider-schedule-update-report.html">Provider Schedule Update Report</a></li>
                  <li><a href="../reports/Missing-time-sheet-report.html">Missing Time Sheet Report</a></li>
                  <li><a href="../reports/time-sheet-report.html">Time Sheet Report</a></li>
                  <li><a href="../reports/potential-fraud-report.html">Potential Fraud Report</a></li>
                  <li><a href="../reports/pa-report.html">PA Report</a></li>
                  <li><a href="../reports/bulk-emails-report.html">Bulk Emails Report</a></li>
                  <li><a href="../reports/marketing-report.html">Marketing Report</a></li>
                  <li><a href="../reports/login-report.html">Login Report</a></li>
                  <li><a href="../reports/financial-report.html">Financial Report</a></li>
                  <li><a href="../reports/debts-report.html">Debts Report</a></li>
                  <li><a href="../reports/employee-summary-report.html">Employee Summary Report</a></li>
                  <li><a href="../reports/mobile-evv-report.html">Mobile EVV Report</a></li>
                  <li><a href="../reports/evv-submission-report.html">EVV Submission Report</a></li>
                  <li><a href="../reports/aging-report.html">Aging Report</a></li>
                </ul>
            </li>
            <li><a href="#" class="nav_links has_arrow">Setup</a>
                <ul class="Inner_menu long">
                   <li><a href="../setup/account-status.html">Account Status</a></li>
                   <li><a href="../setup/account-type.html">Account Type</a></li>
                   <li><a href="../setup/paycor.html">Paycor</a></li>
                   <li><a href="../setup/language.html">Language</a></li>
                   <li><a href="../setup/patient-type.html">Patient Type</a></li>
                   <li><a href="../setup/payment-method.html">Payment Method</a></li>
                   <li><a href="../setup/profession.html">Profession</a></li>
                   <li><a href="../setup/provider-types.html">Provider Types</a></li>
                   <li><a href="../setup/service.html">Service</a></li>
                   <li><a href="../setup/service-type.html">Service Type</a></li>
                   <li><a href="../setup/documents-by-payee.html">Documents By Payee</a></li>
                   <li><a href="../setup/Skills.html">Skills</a></li>
                   <li><a href="../setup/prior-authorization-status.html">Prior Authorization Status</a></li>
                   <li><a href="../setup/payment-cycle-sheet.html">Payment Cycle Sheet</a></li>
                   <li><a href="../setup/company.html">Company</a></li>
                   <li><a href="../setup/tasks.html">Tasks</a></li>
                   <li><a href="../setup/task-status.html">Task Status</a></li>
                   <li><a href="../setup/payment-status.html">Payment Status</a></li>
                   <li><a href="../setup/source.html">Source</a></li>
                   <li><a href="../setup/reasons.html">Reasons</a></li>
                   <li><a href="../setup/priorities.html">Priorities</a></li>
                   <li><a href="../setup/revenue-codes.html">Revenue Code</a></li>
                   <li><a href="../setup/source-of-admission.html">Source Of Admission</a></li>
                   <li><a href="../setup/covid-symptoms.html">Covid Symptoms</a></li>
                   <li><a href="../setup/concern-status.html">Concern Status</a></li>
                   <li><a href="../setup/transfer-type.html">Transfer Type</a></li>
                   <li><a href="../setup/allergy-groups.html">Allergy Groups</a></li>
                   <li><a href="../setup/vitals-list.html">Vitals List</a></li>
                </ul>
            </li>
            <li><a href="#" class="nav_links has_arrow">Security</a>
                <ul class="Inner_menu">
                  <li><a href="../security/agency-management.html">Agency Management</a></li>
                  <li><a href="../security/department-management.html">Department Management</a></li>
                  <li><a href="../security/role-management.html">Role Management</a></li>
                  <li><a href="../security/user-management.html">User Management</a></li>
                  <li><a href="../security/users-online.html">Users Online</a></li>
                </ul>
            </li>
            <li><a href="../audit.html" class="nav_links">Audit</a></li>
            <li><a href="../feedback.html" class="nav_links">Feedback</a></li>
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
