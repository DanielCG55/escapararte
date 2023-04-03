# EscaparArte

> Proyecto Final de CODE CORE School

## Indice

<!-- TODO -->

1. [Título de la página](#título-de-la-página)
2. [Imágenes y vídeos](#imágenes-y-videos)
3. [Motivación del proyecto](#motivación-del-proyecto)
4. [Manual de instalación](#manual-de-instalación)
5. [Ejemplos de código](#ejemplos-de-código)
6. [Entornos de ejecución](#entornos-de-ejecución)
7. [Listado de paquetes y dependencias](#listado-de-paquetes-y-dependencias)
8. [Agradecimientos](#agradecimientos)
9. Otras consideraciones

## Título de la página

EscaparArte

## Imágenes y vídeos
![pantalla](https://user-images.githubusercontent.com/122054483/229470395-73bd06c8-3d07-4000-9b1f-2f1e9da760e4.jpg)
## Motivación del proyecto

Una de mis aficiones es el dibujo. Mi padre es pintor amateur y tengo amigos de dibujan muy bien, así que pensé en crear una especie de galería virtual, para compartir sus creaciones.

## Manual de instalación

Manual de instalación y deployment
Instalación

    Clona el repositorio de GitHub en tu equipo local:

     bash

    git clone https://github.com/tu_usuario/escaparte.git

Navega al directorio del proyecto:

bash

cd escaparte

Instala las dependencias del proyecto usando el packag manager Yarn:

    yarn install

Ejecución en entorno local

    Para ejecutar la aplicación en un entorno local, puedes usar el siguiente comando:

     yarn dev

Este comando iniciará el servidor de desarrollo en http://localhost:3000 y abrirá automáticamente la aplicación en tu navegador.

## Ejemplos de código

```tsx
import { CardGeneric } from "@/types/card";
import Image from "next/image";
import { DeleteButton } from "./DeleteButton";

interface CardProps extends CardGeneric {
    onClick: any;
    style: "pencil" | "oil" | "digital" | "manga";
    texto?: string;
}

export const BaseCard: React.FC<CardProps> = ({
    _id,
    imageSrc,
    title,
    author,
    description,
    onClick,
    style,
}) => {
    const styles = {
        pencil: "border-8   box-border border-l-gray-800 border-b-gray-800 border-t-gray-500 border-r-gray-500 relative min-w-[850px] text-black",
        oil: "border-[20px] ... ring-offset-0 ring-[10px] ring-amber-600/80 box-border  grow-0 border-amber-900/80 relative min-w-[850px] text-orange-900",
        digital:
            "border-8 ... ring-offset-0 ring-8 ring-blue-900/80 border-blue-500/80 box-border relative  min-w-[850px]",
        manga: "border-8  box-border bg-red-700/50 grow-0 border-y-red-900 border-x-red-600 relative min-w-[850px]",
    };
    return (
        <div className="flex m-8 p-20 h-[850px]">
            <div
                className={`box-border relative min-w-[850px] ${styles[style]}`}
            >
                <Image src={imageSrc} fill alt="" className="object-contain" />
            </div>

            <div className="border-2 border-transparent box-border">
                <h1 className="text-6xl m-6">{title}</h1>
                <h2 className="text-4xl m-12">{author}</h2>
                <p className="m-16 text-2xl">{description}</p>
                <DeleteButton onClick={onClick} />
            </div>
        </div>
    );
};
```

## Entornos de ejecución

    Visual Studio Code

## Listado de paquetes y dependencias

-   Package Manager: yarn

-   Lenguajes: Typescript, CSS, HTML

-   Dependencias:

    axios
    fastify
    mongoose
    next
    nodemon
    pino
    react
    react-dom

## Agradecimientos

A Juanpa por la paciencia
