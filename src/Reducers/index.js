import { combineReducers } from 'redux'

const listofsongs = () =>{
    return[
        {title : "vengamavan" , duration : "4.20"},
        {title : "desere danse" , duration : "3.50"},
        {title : "kalaslala" , duration : "5.15"},
        {title : "beleiver" , duration : "2.45"},

    ]
}

const selectedSong = (SelectedSong = null , action) =>{
        if(action.type === "SELECTED_SONG"){
            return action.payload
        }
        return SelectedSong
    }


    export default combineReducers({
        songs : listofsongs,
        SelectedSong : selectedSong
    })
