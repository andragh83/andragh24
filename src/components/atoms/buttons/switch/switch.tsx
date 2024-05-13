

import styles from './styles.module.css'
interface Props {
    onClick: () => void
    activeTab: 'skills' | 'work'
}

const Switch = ( { activeTab, onClick }: Props)=>{
return (
    <button className='relative w-full rounded-full border-0 bg-[#333333] px-[8px] py-[6px] flex items-center h-[64px]' 
        onClick={onClick}
    >
        <div className={`${styles.absoluteBtn} absolute h-[48px] rounded-full bg-[#181818] z-0`}
            style={{transition:'all 200ms', 
                transform:activeTab === 'skills'?'translateX(0)': 'translateX(calc(100%))'}}/>
        <div onClick={()=>{console.log('click left')}} className={`${styles.btnTxt}`}>Skills</div>
        <div className={`${styles.btnTxt}`}>Work</div>
    </button>)
}

export default Switch



