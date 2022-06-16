import { MouseEventHandler } from "react"
import tailt from "tailt"
import { IconDarkMode, IconLightMode } from "./icons/IconModes"

export function ModeButton({onClick, isDark}: {onClick: MouseEventHandler<HTMLButtonElement>, isDark: boolean})  {
    return(
        <Button onClick={onClick}>
            {!isDark && <IconDarkMode/>}
            {isDark && <IconLightMode/>}
        </Button>
    )
}

const Button = tailt.button`
    w-9 h-9 active:scale-[0.8] md:hover:scale-90 md:active:scale-100 animate-pulse
    fill-neutral-900
    dark:fill-white
    duration-200
`