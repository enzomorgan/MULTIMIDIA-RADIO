export type Music = {
    name: string;
    author: string;
    //description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "MENTIRA ESTAMPADA NA CARA",
        author: "Nattanzinho Lima",
       // description: "musica 01",
        urlAudio: "./audios/Mentira Estampada Na Cara.mp3",
        image: "./imagens/NATTANZINHOLIMA.jpg"
    },
    {
        name: "Beleza da rosa",
        author: "Zezo",
       // description: "musica 02",
        urlAudio: "./audios/30 - Beleza da rosa - Zezo Potiguar - 30 Anos.mp3",
        image: "./imagens/ZEZO.jpg"
    },
    {
        name: "Chão de Giz",
        author: "Zé Ramalho",
       // description: "musica 03",
        urlAudio: "./musicas/01 Zé Ramalho - Chão de Giz.mp3",
        image: "./imagens/ZERAMALHO.jpg"
    },
];