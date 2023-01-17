class footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <footer>
            <div class="Print text-end">
                <img src="../images/Printer.png" alt="print"/>
            </div>
            <div class="copyright text-center mt-4">
                <div class="text1">Copyright 2021 by hcmsemr.com Terms Of Use Privacy Statement</div>
                <div class="text2">DotNetNuke® is copyright 2002-2022 by DotNetNuke Corporation</div>
            </div>
      </footer>
     `;
  }
}

customElements.define("footer-component", footer);
