import React from 'react';

const Tutorial = () => {
    const videoLinks = [
        "https://youtu.be/FB5-7tIiX-I?si=9-dcMwkPpEWwkiQH",
        "https://youtu.be/-hSma-BRzoo?si=y5BMFNvUPxstN5BL",
        "https://youtu.be/7KSNmziMqog?si=W1RvanhS3XNv_5Uv",
    ];

    return (
        <div>
            <h1>Tutorials  </h1>
            {/* Add your tutorial content here */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {videoLinks.map((videoUrl) => {
                    const videoId = videoUrl.split('/')[3].split('?')[0]; // Extract the video ID from the URL
                    return (
                        <div key={videoId} style={{ width: '30%', padding: '10px' }}>
                            <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
                                <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Tutorial;
