import Switch from '@components/atoms/buttons/switch/switch'
import Skills from '@components/molecules/Skills'
import Work from '@components/molecules/Work'
import { useState } from 'react'
import styles from './styles.module.css'

type Props = {}

const ContentManager = (props: Props) => {
    const [activeTab, setActiveTab] = useState<'skills' | 'work'>('skills')

    return (
        <div
            role="list"
            className="relative p-6 flex flex-col gap-8 rounded-lg bg-gradient-to-b from-[#2727277f] to-[#181818]"
        >
            <div className="h-[48px]" />
            <div className={`fixed w-[33%] z-4 ${styles.switchWrapper}`}>
                <div className={`${styles.switchSubWrapper}`}>
                    <Switch
                        activeTab={activeTab}
                        onClick={() => {
                            activeTab === 'skills'
                                ? setActiveTab('work')
                                : setActiveTab('skills')
                        }}
                    />
                </div>
            </div>
            <div
                className={`${styles.wrapper} flex overflow-x-hidden gap-6`}
                style={{
                    transition: 'all 200ms',
                    transform:
                        activeTab === 'skills'
                            ? 'translateX(0px)'
                            : 'translateX(calc(-50% - 12px))',
                }}
            >
                <div className="flex-1">
                    <Skills />
                </div>
                <div className="flex-1">
                    <Work />
                </div>
            </div>
        </div>
    )
}

export default ContentManager
