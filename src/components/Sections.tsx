import tailt from "tailt"

export const SectionMe = tailt.section`
    flex flex-col
    text-center
    w-full max-w-7xl
    px-6 
`

export const SectionCards = tailt.section`
    grid grid-cols-1 sm:grid-cols-2
    w-full max-w-7xl
    gap-x-5 gap-y-4 px-4
`

export const SectionSocialMedia = tailt.section`
    grid grid-cols-2 md:grid-cols-4
    w-full max-w-7xl
    gap-6 px-4
`