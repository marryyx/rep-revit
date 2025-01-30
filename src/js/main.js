// import { Routing } from '../root/routing.js';

import { personalComponent } from './components/personal.component.js';
import { profileUserComponent } from './components/profile-user.component.js';
import { profileComponent } from './components/profile.component.js';
import { asideProfileComponent } from './components/aside-profile.component.js';

import { registerComponent } from './components/register.component.js';

import { tabsComponent } from './components/tabs.component.js';
import { basketComponent } from './components/basket.component.js';
import { subheadComponent } from './components/subhead.component.js';
import { langChangeComponent } from './components/lang.component.js';
import { accountComponent } from './components/account.component.js';
import { videoComponent } from './components/video.component.js';
import { assistantComponent } from './components/assistant.component.js';
import { faq } from './components/faq.component.js';
import { footerComponent } from './components/footer.component.js';

const pathname = (parm) => {
    const urlPath = window.location.pathname;
    return urlPath.includes(parm.toString().split('.html')[0])
};

document.addEventListener("DOMContentLoaded", (event) => {
    const pageHome = window.location.pathname === '/' || pathname('index.html');

    if (pageHome) {
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
    }
    if (pathname('profile')) {
        profileUserComponent();
        asideProfileComponent();
        profileComponent();
    }
    if (pathname('personal-info.html')) {
        personalComponent();
        asideProfileComponent();
        profileComponent();
    }
    if (pathname('create-account.html')) {
        registerComponent();
    }
});