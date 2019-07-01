

export const SongSelected = (song) =>{
    return{
        type : "SELECTED_SONG",
        payload : song
    };
}