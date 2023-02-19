import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import PhotoIcon from '@mui/icons-material/Photo';

function App() {
  return (
    <div className="app_wrapper">
        <Header/>
        <div className="app_body">
          <Sidebar/>
          <Feed/>
        </div>
        <div className="feed_options">
          <div className="option">
            <PhotoIcon/>
            <span>Photo</span>
          </div>
          <div className="option">
            <PhotoIcon/>
            <span>Video</span>
          </div>
          <div className="option">
            <PhotoIcon/>
            <span>Event</span>
          </div>
          <div className="option">
            <PhotoIcon/>
            <span>Write Article</span>
          </div>
        </div>
    </div>
  );
}

export default App;
