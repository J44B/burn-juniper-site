import { Link } from 'react-router';
import youtube from '../assets/icons/youtube-logo.svg';
import instagram from '../assets/icons/instagram-logo.svg';

function Footer() {
    return (
        <footer className="bg-[#547D67] text-white">
            <div className="h-auto bg-[#547D67] text-white border-b-2">
                <ul
                    id="menu-items-container"
                    className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
                >
                    <li>
                        <div
                            className="text-white transition hover:text-gray-700/75"
                            href="#"
                        >
                            <Link to={'/about'}>About</Link>
                        </div>
                    </li>

                    <li>
                        <div
                            className="text-white transition hover:text-gray-700/75"
                            href="#"
                        >
                            <Link to={'/live'}>Live</Link>
                        </div>
                    </li>

                    <li>
                        <div
                            className="text-white transition hover:text-gray-700/75"
                            href="#"
                        >
                            <Link to={'/music'}>Music</Link>
                        </div>
                    </li>

                    <li>
                        <div
                            className="text-white transition hover:text-gray-700/75"
                            href="#"
                        >
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                    </li>
                </ul>

                <ul
                    id="social-icons-container"
                    className="mt-4 mb-6 flex justify-center gap-6 md:gap-8"
                >
                    <li>
                        <Link to={'https://www.instagram.com/burnjuniper/'}>
                            <img
                                src={instagram}
                                alt="Link to Instagram"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link to={'https://www.youtube.com/@burnjuniper'}>
                            <img
                                src={youtube}
                                alt="Link to YouTube"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
