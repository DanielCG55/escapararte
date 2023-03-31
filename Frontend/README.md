# EscaparArte

> Proyecto Final de CODE CORE School 

## Indice

<!-- TODO -->
1. [Título de la página](#título-de-la-página)
2. Imágenes y vídeos
3. Motivación del proyecto
4. Acceso directo a la página
5. Tabla de contenidos o índice
6. Manual de instalación y deployment
7. Ejemplos de código
8. Entornos de ejecución
9. Listado de paquetes y dependencias
10. Agradecimientos
11. Otras consideraciones

## Título de la página

EscaparArte

## Imágenes y vídeos

## Motivación del proyecto

Una de mis aficiones es el dibujo. Mi padre es pintor amateur y tengo amigos de dibujan muy bien, así que pensé en crear una especie de galería virtual, para compartir sus creaciones.

## Ejemplos de código

```tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { PencilDrawsCard } from "./PencilDrawsCard";
import Image from "next/image";

export const PencilDraws = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:5000/get_all_cards", {
                params: { origin: window.location.href },
            })
            .then((response) => {
                setData(response.data);
            });
    }, []);
    return (
        <>
            <BackGroundColor bg_color="bg-gray-500/50">
                <div className="flex flex-col bg-[url('/dibujo.avif')] bg-fixed bg-contain w-full">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="flex justify-center text-8xl p-16">
                            Pencil Draws
                        </h1>
                        <h2 className="text-4xl m-16 p-10">
                            · Como bien indica el nombre, esta sección está
                            dirigida para los dibujos hechos a lápiz. No importa
                            dónde(servilletas, papeles viejos, libretas
                            antiguas), si habéis hecho un dibujo y lo queréis
                            compartir, este es vuestro sitio.
                        </h2>
                        <CardForm />
```

## Entornos de ejecución

    Visual Studio Code

## Listado de paquetes y dependencias

-   Package Manager: yarn

-   Lenguajes: Typescript, CSS, HTML

<!-- -   Dependencias: TODO -->

## Agradecimientos
A Juanpa por la paciencia

