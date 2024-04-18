import router from '../router/index'
import isSignedIn from '../../db/auth/isSignedIn'
import { useCounterStore } from '../stores/counter';

export default function ifNotSignedInGoToPage() {
    isSignedIn().then((signedIn) => {
        if(signedIn) {
            useCounterStore.loggedin.value = true;
            console.log(useCounterStore.loggedin.value, 'logged in');
        } else {
            console.log('not logged in')
            router.push('/login')
        }
    })

export default function ifNotSignedInGoToPage(route) {
    if(route.path !== '/login' && route.path !== '/signup') {
        isSignedIn().then((signedIn) => {
            if(signedIn) {
                return
            } else {
                console.log('not logged in')
                router.push('/login')
            }
        })
    }
}