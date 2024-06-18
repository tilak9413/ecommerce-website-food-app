import React from 'react';
import HowItWorks from './HowItWorks';
import { useEffect } from 'react';
const MainContent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
return (
    <main className="main-content">
    <section className="h py-20 text-center opacity-80 ">
        <img style={{width:"100%" , height:"300px"}} src="https://i.pinimg.com/236x/00/2e/12/002e12e2625d0dd7d510e0a0edc7ffab.jpg" alt="" />
    </section>
    <HowItWorks />
    </main>
);
};
export default MainContent;
