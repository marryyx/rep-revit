import { tabsComponent } from './components/tabs.component.js';
import { basketComponent } from './components/basket.component.js';
import { videoComponent } from './components/video.component.js';
import { assistantComponent } from './components/assistant.component.js';
import { faq } from './components/faq.component.js';
import { subheadComponent } from './components/subhead.component.js';

document.addEventListener("DOMContentLoaded", (event) => {
    tabsComponent();
    basketComponent();
    subheadComponent();
    videoComponent();
    assistantComponent();
    faq();
    console.log("Page loaded✅")
});