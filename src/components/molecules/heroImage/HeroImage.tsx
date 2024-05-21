import { useState } from 'react'
import heroImage from '../../../assets/eu_cropped.jpg'
import styles from '../heroImage/styles.module.css'
import CrossIcon from '@components/atoms/icons/cross'
import useWindowDimensions from '@components/hooks/useWindowDimensions'
import { story } from '@components/data'

export default function HeroImage() {
    const [scaleImg, setScaleImg] = useState<undefined | 'story' | 'contact'>(
        undefined
    )

    const [showScaleImgCnt, setShowScaleImgCnt] = useState<boolean>(false)

    let windowDimensions = window ? useWindowDimensions() : undefined

    let leftTranslate = windowDimensions
        ? windowDimensions?.width > 2000
            ? 0 - (windowDimensions.width - 2000) / 2 - 40
            : -40
        : -40

    return (
        <section
            className={`${styles.heroImageWrapper} rounded-lg`}
            style={
                scaleImg
                    ? {
                          zIndex: 11,
                          width: '100dvw',
                          height: '100dvh',
                          transform: `translate(${leftTranslate}px, -40px)`,
                      }
                    : { zIndex: 11 }
            }
        >
            <img
                src={heroImage.src}
                width={heroImage.width}
                alt="Andra Gh image"
                className={`absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full rounded-lg object-cover ${styles.flipHorizontally}`}
                style={
                    scaleImg
                        ? {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'right -240px',
                              transition: 'all 500ms',
                          }
                        : { objectPosition: 'right top' }
                }
            />

            <div
                className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                style={{
                    background: 'linear-gradient(#181818a2, #181818)',
                    transition: 'all 300ms',
                    opacity: scaleImg ? 1 : 0,
                }}
            />

            <div
                className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                style={{
                    background:
                        'linear-gradient(#18181800, #18181800, #1818186d, #181818)',
                    transition: 'all 300ms',
                    opacity: scaleImg ? 0 : 1,
                }}
            />

            <div
                className="w-full h-full relative py-[40px] px-[64px] flex flex-col gap-8 items-center"
                style={{
                    transition: 'all 300ms',
                }}
            >
                {scaleImg ? (
                    <button
                        onClick={() => {
                            setShowScaleImgCnt(false)
                            setTimeout(() => {
                                setScaleImg(undefined)
                            }, 300)
                        }}
                        className="absolute top-8 right-10 z-10"
                    >
                        <CrossIcon size={16} />
                    </button>
                ) : null}
                <h1
                    className="text-[80px] text-white w-full max-w-[1400px] leading-[96px]"
                    style={{
                        position: 'absolute',
                        bottom: scaleImg ? 800 : 180,
                        left: 64,
                        transition: 'all 300ms',
                    }}
                >
                    ANDRA <br /> GHITULESCU
                </h1>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 300,
                        left: 64,
                        opacity:
                            scaleImg === 'story' && showScaleImgCnt ? 1 : 0,
                        height: scaleImg === 'story' ? 'auto' : 0,
                        transition: 'all 300ms',
                    }}
                >
                    <div className="w-full h-full flex flex-col gap-8 pb-[80px]">
                        {story.map((p, i) => (
                            <p
                                key={`story_${i}`}
                                className="text-white text-[24px] font-serif font-thin max-w-[1400px]"
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
                <div
                    className="w-full h-full flex flex-col gap-8 max-w-[1400px]"
                    style={{
                        opacity: !scaleImg ? 1 : 0,
                        transition: 'all 500ms',
                        height: !scaleImg ? 'auto' : 0,
                        position: 'absolute',
                        bottom: 80,
                        left: 64,
                    }}
                >
                    <div className="flex items-center gap-6 ">
                        <button
                            onClick={() => {
                                setScaleImg('story')
                                setTimeout(() => {
                                    setShowScaleImgCnt(true)
                                }, 300)
                            }}
                            className={`${styles.btnTxt} rounded-full bg-white text-off-black py-[12px] px-[24px] uppercase text-[18px]`}
                        >
                            My story
                        </button>
                        <button
                            onClick={() => {
                                setScaleImg('contact')
                                setTimeout(() => {
                                    setShowScaleImgCnt(true)
                                }, 300)
                            }}
                            className={`${styles.btnTxt} rounded-full bg-off-text text-white py-[12px] px-[24px] uppercase text-[18px] border-white border`}
                        >
                            Let's chat
                        </button>
                    </div>
                </div>
            </div>

            {/* {scaleImg === 'story' && showScaleImgCnt ? (
                <div
                    className="w-full h-full relative py-[40px] px-[64px] flex flex-col gap-8 items-center justify-center"
                    style={{ transition: 'all 200ms' }}
                >
                    <button
                        onClick={() => {
                            setShowScaleImgCnt(false)
                            setTimeout(() => {
                                setScaleImg(undefined)
                            }, 500)
                        }}
                        className="absolute top-8 right-10 z-10"
                    >
                        <CrossIcon size={16} />
                    </button>
                    <h1 className="text-[80px] text-white w-full max-w-[1400px]">
                        ANDRA <br /> GHITULESCU
                    </h1>
                    <div
                        className="w-full h-full flex flex-col gap-8"
                        style={{
                            transition: 'all 500ms',
                            height: scaleImg === 'story' ? 'auto' : 0,
                        }}
                    >
                        {story.map((p, i) => (
                            <p
                                key={`story_${i}`}
                                className="text-white text-[24px] font-serif font-thin max-w-[1400px]"
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            ) : scaleImg === 'contact' && showScaleImgCnt ? (
                <div className="w-full h-full relative">
                    <button
                        onClick={() => {
                            setShowScaleImgCnt(false)
                            setTimeout(() => {
                                setScaleImg(undefined)
                            }, 500)
                        }}
                        className="absolute top-4 right-4"
                    >
                        <CrossIcon />
                    </button>
                </div>
            ) : (
                <div className="absolute z-2 py-[56px] px-[56px]">
                    <h2 className="uppercase text-white text-[72px] leading-[80px] pb-[40px] max-w-[500px]">
                        Andra Ghitulescu
                    </h2>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => {
                                setScaleImg('story')
                                setTimeout(() => {
                                    setShowScaleImgCnt(true)
                                }, 500)
                            }}
                            className={`${styles.btnTxt} rounded-full bg-white text-off-black py-[12px] px-[24px] uppercase text-[18px]`}
                        >
                            My story
                        </button>
                        <button
                            onClick={() => {
                                setScaleImg('contact')
                                setTimeout(() => {
                                    setShowScaleImgCnt(true)
                                }, 500)
                            }}
                            className={`${styles.btnTxt} rounded-full bg-off-text text-white py-[12px] px-[24px] uppercase text-[18px] border-white border`}
                        >
                            Let's chat
                        </button>
                    </div>
                </div>
            )} */}
        </section>
    )
}
