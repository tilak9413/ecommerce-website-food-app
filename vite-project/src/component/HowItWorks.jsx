import React from 'react';
const HowItWorks = () => {
  return (
    <section className="py-12 relative">
      <svg style={{ position: "absolute", zIndex: "-100" }} width="264" height="252" viewBox="0 0 264 252" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="float1" d="M93.1987 25.8585C44.0431 9.99256 -11.3997 57.9511 2.04374 118.086C18.9716 177.052 67.6352 139.858 116.242 96.2455C150.691 65.3355 120.629 34.7123 93.1987 25.8585Z" fill="#88BAF2"></path>
        <path className="float2" fillRule="evenodd" clipRule="evenodd" d="M115.573 161.453C121.57 143.642 125.503 122.317 142.409 114.357C159.019 106.537 176.479 119.909 194.186 124.44C213.728 129.441 238.106 125.248 249.743 141.823C261.939 159.193 258.386 183.932 249.626 203.405C241.719 220.98 223.552 229.544 206.415 238.136C189.846 246.443 172.663 254.897 154.623 251.035C135.047 246.845 115.885 235.495 107.838 217.035C100.098 199.279 109.367 179.886 115.573 161.453Z" fill="#F9A6C4"></path>
       
      </svg>
      <h2 className="text-center text-3xl font-bold mb-8 text-red-800">How It Works</h2>
      <div className="container mx-auto flex justify-around">
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/2081/2081955.png" alt="Pick a meal" className="mx-auto w-16 mb-4" />
          <h3 className="text-xl font-semibold">Pick a meal</h3>
          <p>We offer menus to choose from</p>
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3639/3639221.png" alt="Open your box" className="mx-auto w-16 mb-4" />
          <h3 className="text-xl font-semibold">Open your box</h3>
          <p>Your meal ingredients delivered fresh</p>
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1027/1027128.png" alt="Start cooking" className="mx-auto w-16 mb-4" />
          <h3 className="text-xl font-semibold">Start cooking</h3>
          <p>Follow easy steps to cook</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
