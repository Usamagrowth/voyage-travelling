import { CiSearch } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import img2 from "../assets/img3.jpg"
import img1 from "../assets/img4.jpg"
import img3 from "../assets/img2.jpg"
const Blogslideranddetail2rowcard = () => {
  return (
     <div className="flex flex-col space-y-4 w-full">
          <div className="border border-blue-100 p-5 rounded-[20px] w-full">
            <h3 className="font-semibold text-2xl">Search</h3>
            <form action="#" className="relative mt-5 border h-[60px] w-full border-blue-100 rounded-[20px] overflow-hidden">
              <input className="outline-none w-full h-full pl-4 pr-14" type="text" placeholder="Search Here" />
              <CiSearch className="absolute right-0 top-0 h-full w-[50px] bg-[#1CA8CB] p-2 text-white" />
            </form>
          </div>
          <div className="border border-blue-100 p-5 rounded-[20px] w-full">
            <h3 className="font-semibold text-2xl">Service</h3>
            <ul className="divide-y-2 mt-5 space-y-4">
              <li className="flex justify-between py-2"><a href="#">Travel</a><span>04</span></li>
              <li className="flex justify-between py-2"><a href="#">System</a><span>03</span></li>
              <li className="flex justify-between py-2"><a href="#">Agency</a><span>02</span></li>
              <li className="flex justify-between py-2"><a href="#">Restaurant</a><span>05</span></li>
              <li className="flex justify-between py-2"><a href="#">Rant A Car</a><span>06</span></li>
              <li className="flex justify-between py-2"><a href="#">Blueprint Builders</a><span>(03)</span></li>
            </ul>
          </div>
          <div className="border border-blue-100 p-5 rounded-[20px] w-full">
            <h3 className="font-semibold text-2xl">Recent Post</h3>
            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <div className="flex w-[130px] h-[90px] rounded-[20px] overflow-hidden">
                  <img className="w-full h-full object-cover" src={img1} alt="tour date" />
                </div>
                <div className="flex flex-col">
                  <span className="flex gap-2 text-[#1CA8CB] items-center"><FaRegCalendarCheck className="text-orange-500"/><p>14 Feb, 2024</p></span>
                  <a className="font-semibold text-lg" href="#">Get Best Advertised Your Side Pocket.</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-[130px] h-[90px] rounded-[20px] overflow-hidden">
                  <img className="w-full h-full object-cover" src={img2} alt="tour date" />
                </div>
                <div className="flex flex-col">
                  <span className="flex gap-2 text-[#1CA8CB] items-center"><FaRegCalendarCheck className="text-orange-500"/><p>17 Sept, 2023</p></span>
                  <a className="font-semibold text-lg" href="#">Supervisor Disapproved of Latest Work.</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-[130px] h-[90px] rounded-[20px] overflow-hidden">
                  <img className="w-full h-full object-cover" src={img3} alt="tour date" />
                </div>
                <div className="flex flex-col">
                  <span className="flex gap-2 text-[#1CA8CB] items-center"><FaRegCalendarCheck className="text-orange-500"/><p>20 March, 2025</p></span>
                  <a className="font-semibold text-lg" href="#">Sakura dreams and samurai tales.</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-blue-100 p-5 rounded-[20px] w-full">
            <h3 className="font-semibold text-2xl">Tags</h3>
            <div className="flex gap-3 flex-wrap mt-5">
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Agency</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Traveling</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Design</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Travel</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Change</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Video</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">World</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Startup</a>
              <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Services</a>
            </div>
          </div>
     </div>
  )
}

export default Blogslideranddetail2rowcard;
