import React from "react";

const clients = [
  { name: "Ad name 1", image: "https://lh3.googleusercontent.com/d/1rZBoVRAjCg7Nik0o6lXgvVbzTQam2vYl" },
  { name: "Ad name 2", image: "https://lh3.googleusercontent.com/d/1jP93vLa3eH6e7Ao1_YbPJub1n5sbzar7" },
  { name: "Ad name 3", image: "https://lh3.googleusercontent.com/d/1OVLbUdokmzwR5Vlm66R0wWie4-aCPPs3" },
  { name: "Ad name 4", image: "https://lh3.googleusercontent.com/d/1Hc4OmG-2FvX0j9vjXug5WnmLV5AZydKt" },
  { name: "Ad name 5", image: "https://lh3.googleusercontent.com/d/1oa4OhFfDFfcS6sz9-3ytsyKeSAe9LA4l" },
  { name: "Ad name 7", image: "https://lh3.googleusercontent.com/d/1WqmV8aMkTcpbFTHfUJi2WdG416tx3Bcp" },
  { name: "Ad name 8", image: "https://lh3.googleusercontent.com/d/1LqZEMHhjS5lZHQegBSqaUawZcbpBa5X0" },
  { name: "Ad name 9", image: "https://lh3.googleusercontent.com/d/1F29AzYrde33llS7bf-Kq-ec09TEH3ijq" },
  { name: "Ad name 10", image: "https://lh3.googleusercontent.com/d/18mJIB0hSToaqEYWKO7YPW6nA0K1jkSfK" },
  { name: "Ad name 1", image: "https://lh3.googleusercontent.com/d/1rZBoVRAjCg7Nik0o6lXgvVbzTQam2vYl" },
  { name: "Ad name 2", image: "https://lh3.googleusercontent.com/d/1jP93vLa3eH6e7Ao1_YbPJub1n5sbzar7" },
  { name: "Ad name 3", image: "https://lh3.googleusercontent.com/d/1OVLbUdokmzwR5Vlm66R0wWie4-aCPPs3" },
  { name: "Ad name 4", image: "https://lh3.googleusercontent.com/d/1Hc4OmG-2FvX0j9vjXug5WnmLV5AZydKt" },
  { name: "Ad name 5", image: "https://lh3.googleusercontent.com/d/1oa4OhFfDFfcS6sz9-3ytsyKeSAe9LA4l" },
  { name: "Ad name 6", image: "https://lh3.googleusercontent.com/d/18nQWoSpGpv-zSuZpXTGujRLi5lv3FdrT" },
  { name: "Ad name 8", image: "https://lh3.googleusercontent.com/d/1LqZEMHhjS5lZHQegBSqaUawZcbpBa5X0" },
  { name: "Ad name 9", image: "https://lh3.googleusercontent.com/d/1F29AzYrde33llS7bf-Kq-ec09TEH3ijq" },
  { name: "Ad name 10", image: "https://lh3.googleusercontent.com/d/18mJIB0hSToaqEYWKO7YPW6nA0K1jkSfK" },
];

const OrbitReels = () => {
  const shuffledClients = [...clients].sort(() => Math.random() - 0.5).slice(0, 20);
  const radius = 560;

  return (
    <div
      style={{
        backgroundImage: "url('./middleCamera.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "#00000029",
        width: "500px",
        height: "400px",
        margin: "0 auto",
        perspective: "1200px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "spinY 120s linear infinite",
          transformOrigin: "center center",
        }}
      >
        {shuffledClients.map((client, i) => {
          const angle = (360 / clients.length) * i;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div style={reelCard}>
                <img
                  src={client.image}
                  alt={client.name}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                  style={imageStyle}
                />
                <div style={filmHolesTop}>
                  {[...Array(8)].map((_, idx) => <div key={idx} style={hole} />)}
                </div>
                <div style={filmHolesBottom}>
                  {[...Array(8)].map((_, idx) => <div key={idx} style={hole} />)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spinY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OrbitReels;

const reelCard = {
  width: "160px", height: "80px", background: "#000",
  position: "relative", borderRadius: "6px", overflow: "hidden",
  boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
};

const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };

const filmHolesTop = {
  position: "absolute", top: "0", left: "0", width: "100%", height: "10%",
  display: "flex", justifyContent: "space-around", alignItems: "center", zIndex: 10,
};

const filmHolesBottom = {
  position: "absolute", bottom: "0", left: "0", width: "100%", height: "10%",
  display: "flex", justifyContent: "space-around", alignItems: "center", zIndex: 10,
};

const hole = { width: "6px", height: "6px", backgroundColor: "#333", borderRadius: "2px" };
