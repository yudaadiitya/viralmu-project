const detailVideo = (state = {}, action) => {
    switch(action.type) {
        case 'VIEW_VIDEO':
            return action.video;

        default:
            return state;
    }
}

export default detailVideo;