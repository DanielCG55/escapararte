import Image from "next/image";

export const OilsCard = () => {
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-[30px] border-double box-border  grow-0 border-x-amber-900/80 border-y-amber-600/80 relative min-w-[850px]">
                    <Image
                        src={"/mando.png"}
                        fill
                        alt=""
                        className="object-contain "
                    />
                </div>

                <div className="border-2 border-transparent box-border">
                    <h1 className="text-6xl m-6 text-orange-900">
                        Titulo provisional aaaaaaaa
                    </h1>
                    <h2 className="text-3xl m-12 text-orange-900">AUTOR</h2>
                    <p className="m-10 text-xl text-orange-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo natus in sint. Quidem illum accusantium ipsam non
                        rem? Fugit, est doloremque! Inventore debitis quaerat
                        distinctio magni vel at quia nam nostrum exercitationem
                        obcaecati. Maxime a, modi eius amet consequatur incidunt
                        nam fuga dicta repellat non labore expedita quae optio!
                        Rerum.
                    </p>
                </div>
            </div>
        </>
    );
};
