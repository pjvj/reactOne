import React from 'react';
import VideoListItem from './video_list_item';
/*class VideoList  extends Component{

    constructor(props){
        super(props);
    }*/
const VideoList = (props) => {
    console.log("props : " + props.videos);
    const videoListItem = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        );
    });

    return (
        <div>

            <ul className="col-md-4 list-group-item">
                {videoListItem}
            </ul>
        </div>
    );

};

export default VideoList;
//ReactDOM.render(<VideoList/>,document.querySelector('.container'));