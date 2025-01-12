
// 'signin.html'
// 'create-account.hmtl'

const ROUTES = {
    signIn: 'signin.html',
    signUp: 'create-account.html',
    home: 'index.html',
    profile: 'profile.html',
    personalInfo: 'personal-info.html',
}

const ROUTING_DELAY = 1000;

export const Routing = {
    goTo(name) {
        if (ROUTING_DELAY > 0) {
            setTimeout(() => {
                window.location.href = ROUTES[name];
            }, ROUTING_DELAY)
        } 
        else {
            window.location.href = ROUTES[name];
        }
    },
    getRutes() {
        return ROUTES
    },
    goToSingIn() {
        this.goTo('signIn');
    },
    goToSingUp() {
        this.goTo('signUp');
    },
    goToHome() {
        this.goTo('home');
    },
    goToProfile() {
        this.goTo('profile');
    },
    goToPersonal() {
        this.goTo('personalInfo');
    }
} 