import { Outlet } from 'react-router';
import { Header, Footer } from '../components/indexComponents.js';

export function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen justify-between mx-8">
            <Header />
            <main
                id="main-site-container"
                className="max-w-screen-2xl mx-auto my-4"
            >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
