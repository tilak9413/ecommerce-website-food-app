import React from 'react';

const OnTheMenu = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">On The Menu</h2>
      <div className="container mx-auto flex justify-around">
        <div className="text-center">
          <img src="path/to/food1.png" alt="Roasted Sweet Potatoes" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Roasted Sweet Potatoes</h3>
          <p>With poached egg</p>
        </div>
        <div className="text-center">
          <img src="path/to/food2.png" alt="Quinoa Salad" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Quinoa Salad</h3>
          <p>With vegetables</p>
        </div>
        <div className="text-center">
          <img src="path/to/food3.png" alt="Zucchini with Red Beans" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Zucchini with Red Beans</h3>
          <p>And avocado</p>
        </div>
      </div>
    </section>
  );
};

export default OnTheMenu;
