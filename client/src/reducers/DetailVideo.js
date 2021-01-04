const detailVideo = (state = {}, action) => {
    switch(action.type) {
        case 'VIEW_VIDEO_SUCCESS':
            return action.video;

        case 'VIEW_VIDEO_FAILURE':
            break;
        
        default:
            return state;
    }
}

export default detailVideo;