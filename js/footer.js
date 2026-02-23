class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-brand">
                        <h2 class="logo" style="color: white; border: none;">HoHoGo</h2>
                        <p>&copy; 2026 HoHo Inc. All rights reserved.</p>
                    </div>
                    <div class="footer-links">
                        <a href="faq.html">Support & FAQ</a>
                        <a href="privacy.html">Privacy Policy</a>
                        <a href="terms.html">Terms & Conditions</a>
                        <a href="mailto:hohogo.app@gmail.com">Contact Us</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    Apple and the Apple Logo are trademarks of Apple Inc.
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
