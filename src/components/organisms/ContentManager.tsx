import Switch from '@components/atoms/buttons/switch/switch'
import Skills from '@components/molecules/Skills'
import Work from '@components/molecules/Work'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const ContentManager = () => {
    const [activeTab, setActiveTab] = useState<'skills' | 'work'>('skills')
    const [scrollableDiv, setScrollableDiv] = useState<any>(null)
    const [isFixed, setIsFixed] = useState<any>(null)

    const ref = useRef<HTMLDivElement | null>(null)

    const handleScroll = () => {
        let scrollPos = ref.current?.getBoundingClientRect().top

        if (scrollPos && scrollPos < 0) {
            setIsFixed(true)
        }
        if (scrollPos && scrollPos > 0) {
            setIsFixed(false)
        }
    }

    useEffect(() => {
        let div = document.getElementById('scrollable')
        if (div) {
            setScrollableDiv(div)
        }

        document?.addEventListener('scroll', handleScroll)
        return () => {
            document?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            id="skills_and_work"
            className="relative p-4 sm:p-6 flex flex-col gap-4 xl:gap-2 rounded-lg transition-all duration-200"
        >
            <div className="h-[48px]" />
            <div
                ref={ref}
                className={`absolute w-full xl:fixed xl:w-[33%] z-10 ${styles.switchWrapper}`}
            >
                <div
                    className={`${styles.switchSubWrapper}`}
                    style={
                        isFixed ? { position: 'fixed', left: 0, right: 0 } : {}
                    }
                >
                    <Switch
                        activeTab={activeTab}
                        onClick={() => {
                            if (scrollableDiv && scrollableDiv.scrollTo) {
                                scrollableDiv.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                })
                            }

                            ref.current?.scrollIntoView({
                                behavior: 'smooth',
                            })

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
                <div role="list" className="flex-1">
                    <Skills />
                </div>
                <div role="list" className="flex-1">
                    <Work />
                </div>
            </div>
        </div>
    )
}

export default ContentManager
