
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
    goTo(name, delay = ROUTING_DELAY) {
        if (delay > 0) {
            setTimeout(() => {
                window.location.href = ROUTES[name];
            }, delay)
        }
        else {
            window.location.href = ROUTES[name];
        }
    },
    getRutes() {
        return ROUTES
    },
    goToSingIn(delay = ROUTING_DELAY) {
        this.goTo('signIn', delay);
    },
    goToSingUp(delay = ROUTING_DELAY) {
        this.goTo('signUp', delay);
    },
    goToHome(delay = ROUTING_DELAY) {
        this.goTo('home', delay);
    },
    goToProfile(delay = ROUTING_DELAY) {
        this.goTo('profile', delay);
    },
    goToPersonal(delay = ROUTING_DELAY) {
        this.goTo('personalInfo', delay);
    }
} 