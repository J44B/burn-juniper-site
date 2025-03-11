import band from '../assets/pictures/ai-band.jpeg';
import jasi from '../assets/pictures/ai-jasi.jpeg';
import tobi from '../assets/pictures/ai-tobi.jpeg';
import alex from '../assets/pictures/ai-alex.jpeg';
import jochen from '../assets/pictures/ai-jochen.jpeg';

function AboutPage() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <img src={jasi} alt="Jasmin" className="rounded-md" />
                <img src={tobi} alt="Tobi" className="rounded-md" />
                <img src={alex} alt="Alex" className="rounded-md" />
                <img src={jochen} alt="Jochen" className="rounded-md" />
            </div>

            <div className="grid grid-cols-4 gap-4">
                <p>
                    <b>Jasmin</b> - Singt, nur halt mehr in blond statt in
                    AI-dunkel.
                </p>
                <p>
                    <b>Tobi</b> - Spielt Bass, aber die AI-Kappe müsste
                    eigentlich andersrum.
                </p>
                <p>
                    <b>Alex</b> - Ist der Kumpel vom Arbeitskollegen, außerdem
                    kann er im Gegensatz zur AI das Mikro richtig aufbauen.
                </p>
                <p>
                    <b>Jochen</b> - Spielt eigentlich keine AI-Tele, und so
                    kommt er auch schlecht ans Mikro.
                </p>
            </div>
        </>
    );
}

export default AboutPage;
