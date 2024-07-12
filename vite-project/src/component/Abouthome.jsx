const Abouthome = () => {
  return (
    <>
      <section  className="  ">
      
        <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            <div className="max-w-lg  mt-12 md:mt-0">
              <h2 className="text-3xl font-extrabold text-red-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div style={{ placeItems: 'center' }} className="mt-12 md:mt-0 flex justify-center items-center">
        <img
          src="public\freepik-export-20240712042608ukNm.png"
          alt="About Us Image"
          className="object-cover rounded-lg w-96 float1"
        />
      </div>
          </div>
        </div>
       
      </section>
    </>
  );
};
export default Abouthome;
