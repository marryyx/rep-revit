import { Routing } from './root/routing.js';

import { personalComponent } from './components/personal.component.js';
import { profileUserComponent } from './components/profile-user.component.js';
import { profileComponent } from './components/profile.component.js';
import { asideProfileComponent } from './components/aside-profile.component.js';

import { registerComponent } from './components/register.component.js';
import { signinComponent } from './components/signin.component.js';

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

const route = Routing.getRutes();

document.addEventListener("DOMContentLoaded", (event) => {
    const pageHome = window.location.pathname === '/' || pathname(route.home);

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
    }
    if (pathname(route.profile)) {
        profileUserComponent();
        asideProfileComponent();
        profileComponent();
    }
    if (pathname(route.personalInfo)) {
        personalComponent();
        asideProfileComponent();
        profileComponent();
    }
    if (pathname(route.signUp)) {
        registerComponent();
    }
    if (pathname(route.signIn)) {
        signinComponent();
    }

    console.log("Page loaded ✅")
});