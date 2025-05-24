import React from 'react';

const VideoReel = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fdf1ec' }}>
      <div className="container py-5">
        <div className="row align-items-center gx-5">
          {/* Video */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Reel"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <p className="text-uppercase text-warning fw-bold mb-3" style={{ letterSpacing: "2px", fontSize: "14px" }}>
              Video Reel
            </p>
            <h2 className="fw-bold fs-1 mb-3">Unlock The Greatest <br /> Value Possible</h2>
            <p>
              Design, business understanding, ability to put themselves<br />
              in the merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReel;