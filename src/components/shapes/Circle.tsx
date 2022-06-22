import tailt from "tailt"
 
export const CircleTeal = tailt.div`
    rounded-full bg-teal-300 dark:bg-teal-600
    w-80 h-80
    ml-20 sm:ml-40 md:ml-20 lg:ml-40 xl:ml-60
    self-baseline
`

export const CircleSky = tailt.div`
    rounded-full bg-sky-300 dark:bg-sky-600
    w-40 h-40
    mr-16 my-8 md:my-4 lg:m-0
    self-center
`

export const CircleCyan = tailt.div`
    rounded-full bg-cyan-300 dark:bg-cyan-600
    w-60 h-60
    self-end
`