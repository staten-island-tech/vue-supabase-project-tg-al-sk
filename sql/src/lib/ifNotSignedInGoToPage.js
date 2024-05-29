import router from '../router/index'
import isSignedIn from '../../db/auth/isSignedIn'

export default function ifNotSignedInGoToPage(route) {
    if(route.path !== '/login') {
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