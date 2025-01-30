import { tabsComponent } from './components/tabs.component.js';
import { basketComponent } from './components/basket.component.js';
import { videoComponent } from './components/video.component.js';
import { assistantComponent } from './components/assistant.component.js';
import { faq } from './components/faq.component.js';

document.addEventListener("DOMContentLoaded", (event) => {
    tabsComponent();
    basketComponent();
    videoComponent();
    assistantComponent();
    faq();
    console.log("Page loaded✅")
});