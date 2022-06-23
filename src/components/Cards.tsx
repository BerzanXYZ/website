import tailt from "tailt"

export const CardVer = tailt.div`
    flex justify-center items-center text-center
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    px-4
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(30vw+9rem)] max-h-96
    shadow-[0_0_0.4rem_#bbb]
    dark:shadow-[0_0_0.4rem_#171717]
    bg-cyan-400 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40 dark:backdrop-blur-lg
    duration-200
`

export const CardHor = tailt.div`
    flex justify-center items-center text-center sm:col-span-2
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    px-4
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(20vw+6rem)] max-h-96
    shadow-[0_0_0.4rem_#bbb]
    dark:shadow-[0_0_0.4rem_#171717]
    bg-cyan-400 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40 dark:backdrop-blur-lg
    duration-200
`

export const CardWork = tailt.div`
    flex flex-col
    p-8 gap-y-3
    rounded-xl
    shadow-[0_0_1rem_#bbb]
    dark:shadow-[0_0_1rem_#171717]
    bg-teal-400 bg-opacity-40 backdrop-blur-lg
    dark:bg-teal-700 dark:bg-opacity-60 dark:backdrop-blur-lg
    duration-200
`
export const CardWorkH = tailt.h2`font-semibold text-xl`
export const CardWorkP = tailt.p`font-medium text-lg`

export const CardSocialMedia = tailt.div`
    flex justify-center items-center
    font-bold text-xl lg:text-2xl
    px-4
    rounded-xl h-[calc(10vw+5rem)]
    md:hover:rotate-6 md:active:-rotate-6
    shadow-[0_0_1rem_#bbb]
    dark:shadow-[0_0_1rem_#171717]
    bg-cyan-400 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-700 dark:bg-opacity-60 dark:backdrop-blur-lg
    duration-200 cursor-pointer
`
