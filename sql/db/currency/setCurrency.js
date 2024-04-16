import supabaseClient from "../supabaseClient";

export default function setCurrency({ golden_seagulls, diamond_seagulls}) {
    const supabase = supabaseClient()
    supabase.from('currency').insert({ golden_seagulls, diamond_seagulls, id: 'egianegjaslge'})
}

setCurrency({ golden_seagulls: 10, diamond_seagulls: 10})