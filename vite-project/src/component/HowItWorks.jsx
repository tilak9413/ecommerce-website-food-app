import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
      <div className="container mx-auto flex justify-around">
        <div className="text-center">
          <img  src="https://cdn-icons-png.flaticon.com/512/2081/2081955.png" alt="Pick a meal" className="mx-auto w-16 mb-4" />
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
