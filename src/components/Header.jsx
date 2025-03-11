import { Link } from 'react-router';
import burnjuniper from '../assets/icons/bj-logo-white.png';

function Header() {
    return (
        <div className="h-12 bg-[#547D67] drop-shadow-md text-white border-b-2">
            <div id="bandname" className="flex justify-center items-center">
                <Link to={'/'} className="text-3xl">
                    <img
                        className="w-96"
                        src={burnjuniper}
                        alt="Burn Juniper Logo"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Header;
