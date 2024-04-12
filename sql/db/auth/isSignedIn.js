import supabaseClient from "../supabaseClient";

export default async function isSignedIn() {
    const supabase = supabaseClient()
    const user = await supabase.auth.getUser()
    console.log(user)
    if(user.data.user !== null) {
        return true
    } else {
        return false
    }
}