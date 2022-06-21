import tailt from "tailt"

export const CardVer = tailt.div`
    flex justify-center items-center
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(30vw+9rem)] max-h-[40rem]
    shadow-[inset_0_0_0.4rem_#fff]
    dark:shadow-[inset_0_0_0.4rem_#666]
    bg-cyan-300 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40
`

export const CardHor = tailt.div`
    flex justify-center items-center sm:col-span-2
    font-bold text-3xl sm:text-4xl md:text-5xl lg:text:6xl
    rounded-xl h-[calc(25vw+25rem)] sm:h-[calc(20vw+6rem)] max-h-96
    shadow-[inset_0_0_0.4rem_#fff]
    dark:shadow-[inset_0_0_0.4rem_#666]
    bg-cyan-300 bg-opacity-40 backdrop-blur-lg
    dark:bg-cyan-800 dark:bg-opacity-40
`