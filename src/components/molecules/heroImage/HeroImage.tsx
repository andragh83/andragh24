
import heroImage from '../../../assets/eu_cropped.jpg'
import styles from '../heroImage/styles.module.css'

export default function HeroImage () {
    return <section className={`${styles.heroImageWrapper} rounded-lg`}>
    <img
        src={heroImage.src}
        width={heroImage.width}
        alt="Andra Gh image"
        className={`absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full rounded-lg object-cover object-right-top ${styles.flipHorizontally}`}
    />
    <div
        className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full ${styles.linearGradient}`}
    >
    </div>
    <div className="absolute z-2 py-[56px] px-[56px]">
        <h2
            className="uppercase text-white text-[72px] leading-[80px] pb-[40px] max-w-[500px]"
        >
            Andra Ghitulescu
        </h2>
        <div className="flex items-center gap-6">
            <button
                className={`${styles.btnTxt} rounded-full bg-white text-off-black py-[12px] px-[24px] uppercase text-[18px]`}
            >
                My story
            </button>
            <button
                className={`${styles.btnTxt} rounded-full bg-off-text text-white py-[12px] px-[24px] uppercase text-[18px] border-white border`}
            >
                Let's chat
            </button>
        </div>
    </div>
</section>}