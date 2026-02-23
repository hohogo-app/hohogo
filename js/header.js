class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="nav-wrapper">
            <nav>
                <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px;">
                    <img src="img/app_icon.png" alt="HoHoGo Icon" style="width: 36px; height: 36px; border-radius: 8px;">
                    HoHoGo
                </a>
                <a href="#" class="nav-btn">Get the App</a>
            </nav>
        </div>
        `;
    }
}

customElements.define('app-header', Header);
