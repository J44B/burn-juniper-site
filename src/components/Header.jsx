import { Link } from 'react-router';

function Header() {
    return (
        <div className="h-12 bg-[#547D67] text-white border-b-2">
            <div id="bandname" className="flex justify-center items-center">
                <Link to={'/'} className="text-3xl">
                    Burn Juniper
                </Link>
            </div>
        </div>
    );
}

export default Header;
