import { Header, Footer } from '../components/indexComponents.js';

export function MainLayout() {
    return (
        <>
            <div>
                <Header />
                <main id="main-site-container"></main>
                <Footer />
            </div>
        </>
    );
}
