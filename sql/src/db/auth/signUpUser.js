
export default signUpUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
}
