import Image from "next/image";

export const AboutMe = () => {
    return (
        <>
            <div className="bg-[url('/muro.avif')] bg-cover">
                <div className="gap-32 m-20 flex flex-col ">
                    <h1 className="text-8xl">¡Hola!</h1>

                    <h2 className="text-6xl">
                        En esta página os contaré un poco quien soy.
                    </h2>
                    <div className="text-4xl flex gap-10 flex-col">
                        <p>
                            Mi nombre es Daniel. Nací en una localidad
                            barcelonesa llamada Sabadell. Cúanto hace? Mucho...
                        </p>
                        <p>
                            Lo cierto es que nunca había demostrado interés por
                            el arte hasta que mi padre empezó a pintar óleos. Lo
                            hacía por afición, pero lo cierto es que lo hacía de
                            fábula. Eso despertó en mi cierta envidia, y me dije
                            a mi mismo si yo tenía también una vena artística.
                        </p>
                        <p>
                            Por ese entonces yo trabajaba de encargado en un
                            restaurante, y en los ratos libres me dio por
                            empezar a garabatear. Al principio, salían cosas
                            abstractas, eso era por diciembre de 2021. De hecho,
                            mi primer dibujo hecho en serio, es la cara de Gohan
                            que podéis ver en la seccíon Digital Draws. Está
                            hecho a lápiz, pero quería ponerlo de muestra.
                        </p>
                        <p>
                            La idea de que era capaz de hacer eso, me llevó a
                            pensar si también podría cambiar de vida y hacer
                            algo diferente.
                        </p>
                        <p>
                            Me decanté por la programación y a través de un
                            anuncio en Instagram, descubrí CORE CODE School.
                            Desde la primera persona que contactó conmigo me di
                            cuenta de que había acertado.
                        </p>
                        <p>
                            Gracias a sus enseñanzas he podido desarrollar esta
                            web y así acercaros mis creaciones y que las
                            critiquéis, jeje. Espero poder ir incrementando la
                            colección, incluso que podáis compartir vosotros
                            también.
                        </p>
                        <p>
                            Sin más, me despido, un saludo a todos y recordad:
                            No os rindáis nunca, siempre se está a tiempo de
                            cambiar de vida.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
