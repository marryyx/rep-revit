import { tabsComponent } from './components/tabs.component.js';
import { basketComponent } from './components/basket.component.js';
import { subheadComponent } from './components/subhead.component.js';
import { langChangeComponent } from './components/lang.component.js';
import { accountComponent } from './components/account.component.js';
import { videoComponent } from './components/video.component.js';
import { assistantComponent } from './components/assistant.component.js';
import { faq } from './components/faq.component.js';
import { footerComponent } from './components/footer.component.js';

document.addEventListener("DOMContentLoaded", (event) => {
    tabsComponent();
    basketComponent();
    langChangeComponent();
    subheadComponent();
    accountComponent();
    videoComponent();
    assistantComponent();
    faq();
    footerComponent();
    console.log("Page loaded✅")
});