import React from 'react';

const VideoDetails = (props) => {
    if (!props.video) {
        return (<h2> Loading...</h2>);
    }
    const url = 'https://www.youtube.com/embed/' + props.video.id.videoId;
    //console.log(props);
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe allowFullScreen={"allowFullScreen"} className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h3> {props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>

    );
};
export default VideoDetails;
