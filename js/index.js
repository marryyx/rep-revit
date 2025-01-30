import { tabsContent } from './components/tabs.js';
import { basketContent } from './components/basket.js';
import { videoContent } from './components/video.js';
import { assistantContent } from './components/assistant.js';

document.addEventListener("DOMContentLoaded", (event) => {
    tabsContent();
    basketContent();
    videoContent();
    assistantContent();
    console.log("Page loaded✅")
});