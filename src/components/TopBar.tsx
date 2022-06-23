import tailt from "tailt"

export const TopBar = tailt.header`
    sticky top-0 z-30
    flex items-center justify-between
    h-16 w-full
    px-6
    bg-white bg-opacity-70 backdrop-blur-lg
    dark:bg-neutral-900 dark:bg-opacity-70 dark:backdrop-blur-lg
`

export const Brand = tailt.h1`
    font-bold text-2xl
    cursor-pointer select-none
`