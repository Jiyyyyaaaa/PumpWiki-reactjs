import React, { useState } from 'react';
import './Video.css';
import video1 from './video1.mp4'; 
import video2 from './video2.mp4'; 
import play from './play.PNG';
import pause from './pause.PNG';
const VideoPlaylist = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const data = [
    {
      'id': 'a1',
      'title': 'Deadlift',
      'name': video1,
      'duration': '0:57',
    },
    {
      'id': 'a2',
      'title': 'Bent-Over Row',
      'name': video2,
      'duration': '0:13',
    },
    // Add more video data here
  ];

  const handleVideoClick = (id, index) => {
    setActiveVideo(index); // Set the active video when clicked

    // Find the clicked video by id
    const selectedVideo = data.find(video => video.id === id);

    // Update main video source and title
    const mainVideo = document.querySelector('.main-video video');
    const mainVideoTitle = document.querySelector('.main-video .title');
    mainVideo.src = 'videos/' + selectedVideo.name;
    mainVideoTitle.textContent = selectedVideo.title;
  };

  return (
    <section className="video-playlist">
      <h3 className="title">Let's get started with your Back Workout</h3>
      <p>10 lessons &nbsp; &nbsp;</p>
      <div className="videos">
        {/* Map through the video data to render video items */}
        {data.map((video, index) => (
          <div
            key={video.id}
            className={`video ${index === activeVideo ? 'active' : ''}`}
            onClick={() => handleVideoClick(video.id, index)}
          >
            <img src={play} alt="" />
            <p>{index + 1 > 9 ? index + 1 : '0' + (index + 1)}. </p>
            <h3 className="title">{video.title}</h3>
            <p className="time">{video.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="container">
      <section className="main-video">
        <video src={video2} controls autoPlay muted></video>
        <h3 className="title">Deadlift</h3>
      </section>
      <VideoPlaylist />
    </main>
  );
}

export default App;
