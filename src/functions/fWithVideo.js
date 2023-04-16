import Video from "../components/Video";
import New from "../components/New";
import Popular from "../components/Popular";

function fWithVideo(Component) {
    return function(props, ...args) {
        if (props.views<100) {
            return <New>{Component.apply(this, [props, ...args])}</New>
        }
        if (props.views>=1000) {
            return <Popular>{Component.apply(this, [props, ...args])}</Popular>
        }
        return Component.apply(this, [props, ...args]);        
    }
}

const HandledVideo = fWithVideo(Video);
export default HandledVideo;