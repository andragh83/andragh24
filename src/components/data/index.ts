export type ICardType =
    | 'icon'
    | 'icon_and_text'
    | 'leters_icon_and_text'
    | 'leters_icon_and_text_and_list'
    | 'sub_card_list'

export type ICardIcon =
    | 'react'
    | 'react native'
    | 'redux'
    | 'redux-saga'
    | 'nextjs'
    | 'expo'
    | 'typescript'
    | 'supabase'
    | 'email templates'
    | 'figma'
    | 'faveit'

export type ICard = {
    type: ICardType
    style: 'outlined' | 'full-color'
    icon_letter_1?: string
    icon_letter_2?: string
    text?: string
    text_2?: string
    cards_list?: ICardIcon[][]
    text_list?: string[]
    icon?: ICardIcon
}

export const data: { [key: string]: ICard } = {
    skills_card_general: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'J',
        icon_letter_2: 's',
        text: 'I’m a self-taught software engineer specialised in JAVASCRIPT based frontend technologies.',
    },
    skills_card_fundam: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'T',
        icon_letter_2: 's',
        text: 'I know my fundamentals so I can learn any javascript based framework. Currently my daily work involves, always typesafe:',
    },
    skills_card_list: {
        type: 'sub_card_list',
        style: 'outlined',
        cards_list: [
            ['react', 'nextjs', 'redux', 'redux-saga'],
            ['react native', 'expo'],
            ['typescript'],
        ],
    },
    skills_card_backend: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'B',
        icon_letter_2: 'e',
        text: 'I have basic knowledge of backend tech and of Postgress databases so I use supabase for my personal projects.',
    },
    skills_card_supabase: {
        type: 'icon_and_text',
        style: 'outlined',
        text: 'supabase',
    },
    skills_card_emails: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'E',
        icon_letter_2: 'm',
        text: 'I occasionally code email templates and I ship them with Postmark.',
    },
    skills_card_email_templates: {
        type: 'icon_and_text',
        style: 'outlined',
        text: 'email templates',
    },
    skills_card_design: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'D',
        icon_letter_2: 'e',
        text: 'I also enjoy doing design work and I often create beautiful and clean UI flows which I then translate into code.',
    },
    skills_card_figma: {
        type: 'icon_and_text',
        style: 'outlined',
        text: 'figma',
    },
    work_card_general: {
        type: 'leters_icon_and_text',
        style: 'outlined',
        icon_letter_1: 'C',
        text: 'I’m part of CUSTODIAN, a brilliant startup on a mission to disrupt the classic cars insurance market. ',
        text_2: 'We’re a small team of passionate people, shipping at a fast pace without compromising on quality.',
    },
    work_card_description: {
        type: 'leters_icon_and_text_and_list',
        style: 'full-color',
        icon_letter_1: 'W',
        text: 'I’m half of the frontend tech team that builds and maintains:',
        text_list: [
            'our main REACT progressive web app (PWA)',
            'our iOS native app',
            'two NextJs micro-frontends optimised for SEO',
        ],
    },
    work_card_freetime: {
        type: 'leters_icon_and_text',
        style: 'outlined',
        icon_letter_1: 'P',
        text: 'In my free time I enjoy trying new tech and bringing my crazy apps ideas to life. Currently I am working on a side project I’ve been thinking of ever since I’ve started to learn how to code. ',
    },
    work_card_faveit: {
        type: 'leters_icon_and_text',
        style: 'full-color',
        icon_letter_1: 'F',
        text: 'FaveIT is an app that enables its users to curate desired gifts and share them with whoever they choose. It is built with React Native on top of SUPABASE.',
        text_2: 'Go check it out!',
    },
    work_card_faveit_icon: {
        type: 'icon',
        style: 'full-color',
        icon: 'faveit',
    },
}

export const skills_cards_list = [
    'skills_card_general',
    'skills_card_fundam',
    'skills_card_list',
    'skills_card_backend',
    'skills_card_supabase',
    'skills_card_emails',
    'skills_card_email_templates',
    'skills_card_design',
    'skills_card_figma',
]

export const work_cards_list = [
    'work_card_general',
    'work_card_description',
    'work_card_freetime',
    'work_card_faveit',
    'work_card_faveit_icon',
]

export const story = [
    "I learned programming in high school, with Pascal and C++, but I decided to further pursue economic studies and eventually made a career in that field and I've worked as a procurement specialist for 14 years. I restarted to code in 2016 by taking various online web development courses which I enjoyed very much and I developed a real passion for creating websites.",
    "I've been coding as a side-hustle to my full-time job since 2018, building small websites for friends and family while also building various side projects to enhance my web design and programming skills.",
    "In 2020 I moved to London and pursued my goal of working as full-time web developer. After hundreds of applications sent, several talks with recruiters and a few interviews, I landed a job as a software engineer at the most awesome startup. Now I'm spending all my time and effort in meeting my own professional expectations, and the ones of the people who gave me this chance by trying to create value everyday.",
]
