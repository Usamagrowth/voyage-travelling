import { useEffect, useState } from "react";
import Blogcards from "../Components/Blogcards";
import GlobalHeader from "../Components/GlobalHeader";
import FooterSection from "../Components/FooterSection";
import { FaArrowUp } from "react-icons/fa";
const BlogPage = () => {

   const [scrollPercentage, setScrollPercentage] = useState(0);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = (scrollTop / windowHeight) * 100;
          setScrollPercentage(scrolled);
          setIsVisible(scrollTop > 200); // show only after scrolling down
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div>
      <GlobalHeader headerTitle="Blog" headerLink="Blog"/>
    <section className="max-w-screen-xl mx-auto px-4 pb-16 flex flex-wrap items-start justify-center gap-6">
        <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/08.jpg"
        blogdetails="The Surfing man Will Blow Your Mind"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/09.jpg"
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/10.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/11.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
        <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/12.jpg"
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
          <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/13.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
    </section>
 <FooterSection />
    <>
          {isVisible && (
            <div
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center 
              w-14 h-14 rounded-full bg-[#1CA8CB] shadow-xl border z-[2000]"
            >
              {/* Circular Progress */}
              <svg className="absolute w-16 h-16 -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e5e7eb" // light gray bg circle
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#113D48" // Tailwind blue
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 28 - (scrollPercentage / 100) * 2 * Math.PI * 28
                  }`}
                  className="transition-all duration-200"
                />
              </svg>
    
              {/* Icon */}
              <FaArrowUp className="w-5 h-5 text-white relative z-[2000]"/>
            </div>
          )}
          </>
    </div>
    
  )
}

export default BlogPage;