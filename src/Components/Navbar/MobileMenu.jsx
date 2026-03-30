import { Link } from 'react-router-dom';
import DestinationMobileNav from './MobileNav/DestinationMobileNav';
import TourMobileNav from './MobileNav/TourMobileNav';
import PagesMobileNav from './MobileNav/PagesMobileNav';
import BlogMobileNav from './MobileNav/BlogMobileNav';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MobileMenu = ({ closeMobileMenu }) => {
    useEffect(() => {
            AOS.init();
         },[]);

  return (
    <section className='fixed lg:hidden block inset-0 w-full z-50 text-[14px]' data-aos="fade-left" data-aos-duration="500">
    <div className="grid font-medium bg-black pt-32 pb-10 px-5">
        <ul className="grid p-5 text-white cursor-pointer space-y-10">
          <Link to="/">
            <li onClick={closeMobileMenu} className="w-full">Home</li>
          </Link>
          <Link to="/aboutPage">
            <li onClick={closeMobileMenu} className="w-full">About Us</li>
          </Link>
          <DestinationMobileNav onClose={closeMobileMenu} />
          <TourMobileNav onClose={closeMobileMenu} />
          <PagesMobileNav onClose={closeMobileMenu} />
          <BlogMobileNav onClose={closeMobileMenu} />
          <Link to="/contactPage">
            <li onClick={closeMobileMenu} className="w-full">Contact Us</li>
          </Link>
        </ul>

    </div>
    </section>
  )
}

export default MobileMenu;