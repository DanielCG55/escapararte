

import { BackGroundColor } from "../shared/BackGroundColor";
import { DigitalDrawsCard } from "./DigitalDrawsCard";

export const DigitalDraws = () => {
    return (
        <>
            <BackGroundColor bg_color="bg-lime-500/50">
                <h1 className="flex justify-center text-8xl p-16 text-blue-900/80">
                    Digital Draws
                </h1>
                <h2 className="text-4xl m-16 p-10 text-blue-900/80">
                    · Como bien indica el nombre, esta sección está dirigida
                    para los dibujos hechos a lápiz. No importa
                    dónde(servilletas, papeles viejos, libretas antiguas), si
                    habéis hecho un dibujo y lo queréis compartir, este es
                    vuestro sitio.
                </h2>
               <DigitalDrawsCard/>
            </BackGroundColor>
        </>
    );
};
