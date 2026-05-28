
function Showreel() {
    return (
        <section id="showreel">
            <h2>Showreel</h2>
            <div className="video-container">
                <video 
                    src="/Images/Showreel.mp4" 
                    controls 
                    preload="metadata"
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default Showreel;