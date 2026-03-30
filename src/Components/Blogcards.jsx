import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineLocalOffer } from "react-icons/md";
const Blogcards = ({blogimages, blogdetails }) => {
  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
      <div className="relative rounded-[24px] bg-white shadow-sm pb-16 overflow-hidden">
        <div className="h-[240px] sm:h-[260px] w-full overflow-hidden rounded-t-[24px]">
          <img className="object-cover w-full h-full" src={blogimages} alt="blog images" />
        </div>
        <div className="absolute inset-x-4 -bottom-10 bg-white/95 backdrop-blur rounded-[24px] p-5 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="bg-[#1CA8CB] rounded-xl w-[65px] h-[65px] flex items-center justify-center font-semibold text-xl sm:text-2xl text-white">26<br/>Nov</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-1"><RiAdminLine /> Admin</span>
                <span className="flex items-center gap-1"><MdOutlineLocalOffer /> Travel</span>
              </div>
            </div>
            <h3 className="font-semibold text-xl sm:text-2xl text-slate-900">{blogdetails}</h3>
            <Link to="/blogDetails" className="inline-flex items-center gap-2 text-[#1CA8CB] font-semibold">
              Read More <GrLinkNext />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcards;