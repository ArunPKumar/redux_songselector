import React from 'react';
import { connect } from 'react-redux';


const songDetail = (props) => {
    if(!props.selectedSong){
        return <div>Select a Song...</div>
    }
    return(
    <div>
        <h3>The Song Detail is : </h3>
        <p>
            {props.selectedSong.title}
            <br/>
            {props.selectedSong.duration}
        </p>
    </div>)
};

const mapStateToProps = (state) =>{
    return{
        selectedSong : state.SelectedSong
    }
}

export default connect(mapStateToProps)(songDetail)