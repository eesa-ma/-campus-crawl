
import bannervideo from "../assets/banner/Campus Crwal.mp4"

function Videobanner() {
    return (
        <>
            <div  className="relative flex items-center justify-center h-screen overflow-hidden">
                 <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source src={bannervideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
           
        </>
    );
}

export default Videobanner;
