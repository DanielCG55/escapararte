import Image from "next/image";

export const MangasCard = () => {
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-8 rounded-3xl box-border grow-0 border-y-red-700 border-x-red-600 relative min-w-[850px]">
                    <Image
                        src={"/mando.png"}
                        fill
                        alt=""
                        className="object-contain "
                    />
                </div>

                <div className="border-2 border-transparent box-border text-slate-50/80">
                    <h1 className="text-6xl m-6 text-slate-50/80">
                        Titulo provisional aaaaaaaa
                    </h1>
                    <h2 className="text-3xl m-12 text-slate-50/80">AUTOR</h2>
                    <p className="m-10 text-xl">
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
