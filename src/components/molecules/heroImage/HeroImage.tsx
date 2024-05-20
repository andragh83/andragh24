import { useState } from 'react'
import heroImage from '../../../assets/eu_cropped.jpg'
import styles from '../heroImage/styles.module.css'
import CrossIcon from '@components/atoms/icons/cross'
import useWindowDimensions from '@components/hooks/useWindowDimensions'

export default function HeroImage() {
    const [fixedPositionId, setFixedPositionId] = useState<
        undefined | 'story' | 'contact'
    >(undefined)
    const [scaleImage, setScaleImage] = useState<boolean>(false)
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
                scaleImage
                    ? {
                          position: fixedPositionId ? 'fixed' : 'absolute',
                          //   top: fixedPositionId ? 0 : undefined,
                          //   left: fixedPositionId ? 0 : undefined,
                          zIndex: 5,
                          width: '100dvw',
                          height: '100dvh',
                          transform: fixedPositionId
                              ? `translate(${leftTranslate}px, -40px)`
                              : undefined,
                      }
                    : { zIndex: 5 }
            }
        >
            <img
                src={heroImage.src}
                width={heroImage.width}
                alt="Andra Gh image"
                className={`absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full rounded-lg object-cover object-right-top ${styles.flipHorizontally}`}
                style={
                    fixedPositionId
                        ? {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                          }
                        : {}
                }
            />
            {scaleImage ? (
                <div
                    className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                    style={{
                        background: 'linear-gradient(#18181884, #181818)',
                        transition: 'all 200ms',
                        opacity: fixedPositionId ? 1 : 0,
                    }}
                />
            ) : null}
            {scaleImage ? null : (
                <div
                    className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                    style={{
                        background:
                            'linear-gradient(#18181800, #18181800, #1818186d, #181818)',
                        transition: 'all 200ms',
                        opacity: fixedPositionId ? 0 : 1,
                    }}
                />
            )}
            {fixedPositionId === 'story' ? (
                <div>
                    <button
                        onClick={() => {
                            setScaleImage(false)
                            setTimeout(() => setFixedPositionId(undefined), 500)
                        }}
                        className="absolute top-4 right-4 z-10"
                    >
                        <CrossIcon />
                    </button>
                </div>
            ) : fixedPositionId === 'contact' ? (
                <div>
                    <button
                        onClick={() => {
                            setScaleImage(false)
                            setTimeout(() => setFixedPositionId(undefined), 500)
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
                                setScaleImage(true)
                                setTimeout(
                                    () => setFixedPositionId('story'),
                                    500
                                )
                            }}
                            className={`${styles.btnTxt} rounded-full bg-white text-off-black py-[12px] px-[24px] uppercase text-[18px]`}
                        >
                            My story
                        </button>
                        <button
                            onClick={() => {
                                setScaleImage(true)
                                setTimeout(
                                    () => setFixedPositionId('story'),
                                    500
                                )
                            }}
                            className={`${styles.btnTxt} rounded-full bg-off-text text-white py-[12px] px-[24px] uppercase text-[18px] border-white border`}
                        >
                            Let's chat
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
