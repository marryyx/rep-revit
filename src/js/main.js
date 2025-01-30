import { CLIENT_STORAGE_KEYS } from './store/globals-params-store.js';
import { Routing } from './root/routing.js';

import { personalComponent } from './components/personal.component.js';
import { profileComponent } from './components/profile.component.js';
import { profileModalComponent } from './components/profile-modal.component.js';
import { asideProfileComponent } from './components/aside-profile.component.js';

import { avatarComponent } from './components/avatar.component.js';

import { registerComponent } from './components/register.component.js';
import { signinComponent } from './components/signin.component.js';

import { tabsComponent } from './components/tabs.component.js';
import { basketComponent } from './components/basket.component.js';
import { subheadComponent } from './components/subhead.component.js';
import { langChangeComponent } from './components/lang.component.js';
import { videoComponent } from './components/video.component.js';
import { assistantComponent } from './components/assistant.component.js';
import { faq } from './components/faq.component.js';
import { footerComponent } from './components/footer.component.js';

import { AccountComponent } from './components/account.component.js';

const pathname = (parm) => {
    const urlPath = window.location.pathname;
    return urlPath.includes(parm.toString().split('.html')[0])
};

const route = Routing.getRutes();

document.addEventListener("DOMContentLoaded", (event) => {
    const pageHome = window.location.pathname === '/' || pathname(route.home);
    const userAuthData = localStorage.getItem(CLIENT_STORAGE_KEYS.userAuthData);
    const accountComponent = new AccountComponent().init();
    avatarComponent();

    if (pageHome) {
        tabsComponent();
        basketComponent();
        langChangeComponent();
        subheadComponent();
        // new AccountComponent().init();
        videoComponent();
        assistantComponent();
        faq();
        footerComponent();
    }

    if (pathname(route.profile)) {
        if (!userAuthData) {
            Routing.goToHome(0)
            return
        }
        
        profileComponent();
        asideProfileComponent();
        // new AccountComponent();
        profileModalComponent();
    }

    if (pathname(route.personalInfo)) {
        if (!userAuthData) {
            Routing.goToHome(0)
            return
        }
        
        personalComponent();
        asideProfileComponent();
        // new AccountComponent();
        profileModalComponent();
    }
    if (pathname(route.signUp)) {
        registerComponent();
    }
    if (pathname(route.signIn)) {
        signinComponent();
    }

    console.log("Page loaded ✅")
});