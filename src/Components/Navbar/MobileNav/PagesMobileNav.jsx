import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pagesLinks } from '../DropdownLinks';

const PagesMobileNav = ({ onClose }) => {
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const displayMobileMenu = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }

    return (
    <div className='relative'>
        <div className="flex justify-between items-center cursor-pointer" onClick={displayMobileMenu}>
            <li>Pages</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {showMobileDropdown && <article className="p-4 space-y-4">
            {pagesLinks.map((link, value) => (
            <Link key={value} to={link.link} onClick={onClose} className="block w-full hover:text-[#1CA8CB]">
                {link.name}
            </Link>))}
        </article>}
    </div>
  );
};

export default PagesMobileNav;
