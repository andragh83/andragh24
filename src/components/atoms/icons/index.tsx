import type { ICardIcon } from '@components/data'
import ExpoIcon from './expo'
import NextjsIcon from './nextjs'
import ReactIcon from './react'
import ReduxIcon from './redux'
import TypescriptIcon from './typescript'
import SupabaseIcon from './supabase'
import EmailIcon from './email'
import FigmaIcon from './figma'
import FaveitIcon from './faveit'
export default function CardIcon({
    icon,
    size,
    color,
}: {
    icon: ICardIcon
    size?: number
    color?: string
}) {
    switch (icon) {
        case 'expo':
            return <ExpoIcon size={size} color={color} />
        case 'react':
            return <ReactIcon size={size} color={color} />
        case 'react native':
            return <ReactIcon size={size} color={color} />
        case 'redux':
            return <ReduxIcon size={size} color={color} />
        case 'redux-saga':
            return <ReduxIcon size={size} color={color} />
        case 'nextjs':
            return <NextjsIcon size={size} color={color} />
        case 'typescript':
            return <TypescriptIcon size={size} color={color} />
        case 'supabase':
            return <SupabaseIcon size={size} color={color} />
        case 'email templates':
            return <EmailIcon size={size} color={color} />
        case 'figma':
            return <FigmaIcon size={size} color={color} />
        case 'faveit':
            return <FaveitIcon theme={'dark'} />
    }
}
