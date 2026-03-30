import { MdOutlineLocalOffer } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import img3 from "../assets/img3.jpg"
import img2 from "../assets/img2.jpg"
import img1 from "../assets/img1.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const Blogdetailcard = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="relative w-full">
        <div className="h-[320px] md:h-[400px] w-full overflow-hidden rounded-[24px]">
          <img className="w-full h-full object-cover" src={img3} alt="blog images" />
        </div>
        <div className="absolute top-6 left-6 bg-[#1CA8CB] rounded-[20px] w-[80px] h-[80px] flex items-center justify-center font-semibold text-white text-base md:text-xl">
          26<br />Nov
        </div>
      </div>

      <div className="flex flex-wrap gap-5 text-sm text-slate-600">
        <span className="flex items-center gap-2"><RiAdminLine /> By Admin</span>
        <span className="flex items-center gap-2"><MdOutlineLocalOffer /> 5 Comment</span>
        <span>Tour</span>
      </div>

      <div className="border-t border-blue-100" />

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Get Best Advertiser in Your Side Pocket</h3>
        <p className="text-gray-400 leading-7">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit. The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <div className="grid gap-4 lg:grid-cols-2">
          <img className="w-full h-[220px] object-cover rounded-[20px]" src={img2} alt="tour" />
          <img className="w-full h-[220px] object-cover rounded-[20px]" src={img1} alt="tour" />
        </div>

        <p className="leading-7">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

        <div className="rounded-[20px] bg-blue-50 p-6">
          <p className="font-medium leading-7">Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.</p>
        </div>

        <h6 className="leading-7 text-slate-700">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</h6>

        <div className="border-t border-blue-100" />

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Travel</a>
            <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Service</a>
            <a className="border border-blue-100 p-2 rounded-[20px]" href="#">Agency</a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <h5>Share:</h5>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="border-t border-blue-100" />
      </div>

      <div className="flex flex-col gap-7">
        <h5 className="text-2xl font-semibold">03 Comments</h5>
        <div className="flex flex-col gap-6">
          <article className="flex flex-col gap-5 border-t border-blue-100 pt-5">
            <div className="flex flex-col gap-5 sm:flex-row">
              <img className="w-[100px] h-[100px] rounded-full object-cover" src={img3} alt="tour" />
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h5 className="text-xl font-semibold">Leslie Alexander</h5>
                  <a href="#" className="bg-[#1CA8CB] text-white rounded-full px-4 py-1">Reply</a>
                </div>
                <p className="text-sm leading-6">February 10, 2024 at 2:37 pm. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy.</p>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-5 border-t border-blue-100 pt-5">
            <div className="flex flex-col gap-5 sm:flex-row">
              <img className="w-[100px] h-[100px] rounded-full object-cover" src={img2} alt="tour" />
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h5 className="text-xl font-semibold">Stephen Leslie</h5>
                  <a href="#" className="bg-[#1CA8CB] text-white rounded-full px-4 py-1">Reply</a>
                </div>
                <p className="text-sm leading-6">February 10, 2024 at 2:37 pm. Neque porro est qui dolorem ipsum dolor sit amet consectetur adipisicing elit architecto var sed efficitur turpis gilla sed sit amet finibus eros.</p>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-5 border-t border-blue-100 pt-5">
            <div className="flex flex-col gap-5 sm:flex-row">
              <img className="w-[100px] h-[100px] rounded-full object-cover" src={img1} alt="tour" />
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h5 className="text-xl font-semibold">John Alexander</h5>
                  <a href="#" className="bg-[#1CA8CB] text-white rounded-full px-4 py-1">Reply</a>
                </div>
                <p className="text-sm leading-6">February 10, 2024 at 2:37 pm. Neque porro est qui dolorem ipsum dolor sit amet consectetur adipisicing elit architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div>
        <form action="#" className="flex flex-col gap-5 w-full">
          <h5 className="text-2xl font-semibold">Leave A Comments</h5>
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Your Name" className="border border-[#1CA8CB] rounded-[20px] p-4 w-full outline-none" required />
            <input type="text" placeholder="Your Email" className="border border-[#1CA8CB] rounded-[20px] p-4 w-full outline-none" required />
          </div>
          <textarea name="message" placeholder="Messages" className="border border-[#1CA8CB] rounded-[20px] p-4 w-full min-h-[150px] outline-none" />
          <button type="submit" className="w-fit inline-flex items-center gap-3 bg-[#1CA8CB] text-white px-6 py-3 rounded-[30px] font-semibold">post comment <GrLinkNext /></button>
        </form>
      </div>
    </div>
  )
}

export default Blogdetailcard;
