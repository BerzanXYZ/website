import tailt from "tailt"

export const CardVer = tailt.div`
    flex justify-center items-center
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(30vw+9rem)] max-h-[40rem]
    shadow-[0_0_0.4rem_#bbb]
    dark:shadow-[0_0_0.4rem_#171717]
    bg-cyan-300 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40
`

export const CardHor = tailt.div`
    flex justify-center items-center sm:col-span-2
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(20vw+6rem)] max-h-96
    shadow-[0_0_0.4rem_#bbb]
    dark:shadow-[0_0_0.4rem_#171717]
    bg-cyan-300 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40 dark:backdrop-blur-lg
`

export const CardSocialMedia = tailt.div`
    flex justify-center items-center
    rounded-xl h-[calc(10vw+5rem)]
    shadow-[0_0_1rem_#bbb]
    dark:shadow-[0_0_1rem_#171717]
    bg-neutral-200 bg-opacity-60 backdrop-blur-lg
    dark:bg-neutral-800 dark:bg-opacity-60 dark:backdrop-blur-lg
`