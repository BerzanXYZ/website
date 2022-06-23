import tailt from "tailt"

export const FooterWrapper = tailt.footer`
    flex flex-col items-center z-10
    py-16 px-8 w-full
    bg-white bg-opacity-70 backdrop-blur-lg
    dark:bg-neutral-900 dark:bg-opacity-70 dark:backdrop-blur-lg
    select-none
`
export const Footer = tailt.div`
    flex flex-col
    py-16 w-full max-w-6xl
`
export const FooterTitleBox = tailt.div` flex flex-col gap-y-3 w-full `
export const FooterTitlePrimary = tailt.h2` font-bold text-4xl `
export const FooterTitleSecondary = tailt.h2` font-semibold text-lg `