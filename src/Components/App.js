import React from 'react';
import SongList from './SongsList';
import SongDetail from './SongDetail';

const App = () =>{
    return <div className = "ui container grid">
        <div className = "ui row">
            <div className = "eight wide column">
               <SongList />
            </div>
            <div className = "eight wide column">
                <SongDetail/>
            </div>
        </div>
    </div>
}

export default App;