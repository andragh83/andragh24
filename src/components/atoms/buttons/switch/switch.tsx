import SkillsIcon from '@components/atoms/icons/skills'
import styles from './styles.module.css'
import WorkIcon from '@components/atoms/icons/work'
interface Props {
    onClick: () => void
    activeTab: 'skills' | 'work'
}

const Switch = ({ activeTab, onClick }: Props) => {
    return (
        <button
            className={`${styles.insetShadow} relative w-full rounded-full border-0 bg-switch-bg px-[8px] py-[6px] flex items-center h-[64px]`}
            onClick={onClick}
        >
            <div
                className={`${styles.absoluteBtn} absolute h-[48px] rounded-full bg-bg-color-default z-0`}
                style={{
                    transition: 'all 200ms',
                    transform:
                        activeTab === 'work'
                            ? 'translateX(0)'
                            : 'translateX(calc(100%))',
                }}
            />
            <div className={`${styles.btnTxt}`}>
                <WorkIcon size={16} color="var(--icon-color, #afafaf)" /> Work
            </div>
            <div className={`${styles.btnTxt}`}>
                <SkillsIcon size={15} color="var(--icon-color, #afafaf)" />
                Skills
            </div>
        </button>
    )
}

export default Switch
