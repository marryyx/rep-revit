import { tabsContent } from './components/tabs.js';
import { basketContent } from './components/basket.js';
import { videoContent } from './components/video.js';
import { assistantContent } from './components/assistant.js';
import { faq } from './components/faq.js';

document.addEventListener("DOMContentLoaded", (event) => {
    tabsContent();
    basketContent();
    videoContent();
    assistantContent();
    faq();
    console.log("Page loaded✅")
});