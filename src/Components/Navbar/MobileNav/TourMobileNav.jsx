import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tourLinks } from '../DropdownLinks';

const TourMobileNav = ({ onClose }) => {
    const [showMobileDropdown, setShowDropdown] = useState(false);

    const displayMobileMenu = () => {
        setShowDropdown(!showMobileDropdown);
    }

    return (
    <div className='relative'>
        <div className="flex justify-between items-center cursor-pointer" onClick={displayMobileMenu}>
            <li>Tour</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {showMobileDropdown && <article className="p-4 space-y-4">
            {tourLinks.map((link, value) => (
            <Link key={value} to={link.link} onClick={onClose} className="block w-full hover:text-[#1CA8CB]">
                {link.name}
            </Link>))}
        </article>}
    </div>
  );
};

export default TourMobileNav;
