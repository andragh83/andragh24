import { useState } from 'react'
import heroImage from '../../../assets/eu_cropped.jpg'
import styles from '../heroImage/styles.module.css'
import CrossIcon from '@components/atoms/icons/cross'
import useWindowDimensions from '@components/hooks/useWindowDimensions'
import { socials, story } from '@components/data'
import InstaIcon from '@components/atoms/icons/insta'
import XIcon from '@components/atoms/icons/x'
import LinkedinIcon from '@components/atoms/icons/linkedin'
import GithubIcon from '@components/atoms/icons/github'

export default function HeroImage() {
    const [scaleImgWithContent, setScaleImgWithContent] = useState<
        undefined | 'story' | 'contact'
    >(undefined)

    const [revealImgContent, setRevealImgContent] = useState<boolean>(false)

    let windowDimensions = window ? useWindowDimensions() : undefined

    let leftTranslate = windowDimensions
        ? windowDimensions?.width > 2000
            ? 0 - (windowDimensions.width - 2000) / 2 - 40
            : -40
        : -40

    let isMobile =
        windowDimensions?.width && windowDimensions.width < 1280 ? true : false

    let bottomTitlePlacement =
        scaleImgWithContent === 'story'
            ? windowDimensions &&
              (isMobile
                  ? windowDimensions?.height - 220
                  : windowDimensions?.height - 240)
            : scaleImgWithContent === 'contact'
              ? 'calc(100dvh / 2)'
              : 180
    let leftTitlePlacement = isMobile
        ? 0
        : scaleImgWithContent === 'contact'
          ? '50%'
          : 64

    let bottomContentPlacement =
        scaleImgWithContent === 'story'
            ? windowDimensions && windowDimensions?.height - 700
            : scaleImgWithContent === 'contact'
              ? windowDimensions && windowDimensions.height / 2 - 160
              : undefined

    let leftContentPlacement = isMobile
        ? 0
        : scaleImgWithContent === 'contact'
          ? '50%'
          : 64

    const hideList = (v: boolean) => {
        let list_div = document.getElementById('skills_and_work')
        if (list_div) {
            if (v) {
                list_div.style.opacity = '0'
                list_div.style.height = '0'
            } else {
                list_div.style.opacity = '1'
                list_div.style.height = 'auto'
            }
        }
    }

    const onBtnClick = (v: 'story' | 'contact') => {
        setScaleImgWithContent(v)
        setTimeout(() => {
            if (isMobile) {
                hideList(true)
            }
            setRevealImgContent(true)
        }, 300)
    }

    return (
        <section
            className={`${styles.heroImageWrapper} rounded-lg`}
            style={
                scaleImgWithContent
                    ? {
                          zIndex: 11,
                          width: '100dvw',
                          height: '100dvh',
                          transform: isMobile
                              ? undefined
                              : `translate(${leftTranslate}px, -40px)`,
                      }
                    : { zIndex: 11 }
            }
        >
            <img
                src={heroImage.src}
                width={heroImage.width}
                alt="Andra Gh image"
                className={`absolute z-0 top-0 bottom-0 left-0 right-0 w-full h-full 
                            rounded-lg object-cover ${styles.flipHorizontally}`}
                style={
                    scaleImgWithContent
                        ? {
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: isMobile
                                  ? 'left center'
                                  : 'right -240px',
                              transition: 'all 500ms',
                          }
                        : {
                              objectPosition: isMobile
                                  ? 'left center'
                                  : 'right top',
                          }
                }
            />

            <div
                className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                style={{
                    background: 'linear-gradient(#181818a2, #181818)',
                    transition: 'all 300ms',
                    opacity: scaleImgWithContent ? 1 : 0,
                    height:
                        isMobile && scaleImgWithContent ? '100%' : undefined,
                }}
            />

            <div
                className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full`}
                style={{
                    background:
                        'linear-gradient(#18181847, #1818186d, #181818c0, #181818)',
                    transition: 'all 300ms',
                    opacity: scaleImgWithContent ? 0 : 1,
                }}
            />

            <div
                className=" py-[24px] px-[40px] w-full h-full relative xl:py-[40px] 
                            xl:px-[64px] flex flex-col gap-8 items-center"
                style={{
                    transition: 'all 300ms',
                }}
            >
                {scaleImgWithContent ? (
                    <button
                        onClick={() => {
                            setRevealImgContent(false)
                            setTimeout(() => {
                                setScaleImgWithContent(undefined)
                            }, 300)
                            if (isMobile) {
                                hideList(false)
                            }
                        }}
                        className="absolute top-8 right-10 z-10"
                    >
                        <CrossIcon size={16} />
                    </button>
                ) : null}
                <h1
                    className="w-full xl:w-auto text-[40px] leading-[56px]
                             text-white xl:text-[80px] xl:leading-[96px] tracking-wide"
                    style={{
                        position: 'absolute',
                        bottom: bottomTitlePlacement,
                        transform: isMobile
                            ? undefined
                            : scaleImgWithContent === 'contact'
                              ? `translateX(-50%)`
                              : undefined,
                        left: leftTitlePlacement,
                        transition: 'all 300ms',
                        textAlign:
                            scaleImgWithContent === 'contact' || isMobile
                                ? 'center'
                                : undefined,
                    }}
                >
                    ANDRA <br /> GHITULESCU
                </h1>
                <div
                    className="px-[24px] xl:px-0"
                    style={{
                        position: 'absolute',
                        bottom: isMobile ? undefined : bottomContentPlacement,
                        top: isMobile
                            ? scaleImgWithContent === 'contact'
                                ? '50%'
                                : 260
                            : undefined,
                        transform:
                            scaleImgWithContent === 'contact'
                                ? `translateX(-50%)`
                                : undefined,
                        left:
                            scaleImgWithContent === 'contact' && isMobile
                                ? '50%'
                                : leftContentPlacement,
                        opacity:
                            scaleImgWithContent && revealImgContent ? 1 : 0,
                        height: scaleImgWithContent ? 'auto' : 0,
                        transition: 'all 300ms',
                    }}
                >
                    {scaleImgWithContent === 'contact' ? (
                        <div className="w-full flex flex-col pt-8 xl:pt-0 gap-4 sm:gap-8 items-center justify-center">
                            <p className="text-white uppercase text-[16px] xl:text-[24px]">
                                find me on
                            </p>
                            <div className="w-full flex gap-4 items-center justify-center">
                                {socials.map((item, i) => {
                                    switch (item.id) {
                                        case 'insta':
                                            return (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <InstaIcon />
                                                </a>
                                            )
                                        case 'x':
                                            return (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <XIcon />
                                                </a>
                                            )
                                        case 'linkedin':
                                            return (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <LinkedinIcon />
                                                </a>
                                            )
                                        case 'github':
                                            return (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                >
                                                    <GithubIcon />
                                                </a>
                                            )
                                    }
                                })}
                            </div>
                        </div>
                    ) : null}
                    {scaleImgWithContent === 'story' ? (
                        <div className="w-full h-full flex flex-col gap-8 pb-[80px]">
                            {story.map((p, i) => (
                                <p
                                    key={`story_${i}`}
                                    className="text-white text-[24px] font-serif 
                                                font-thin max-w-[1400px]"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div
                    className="items-center xl:items-start w-full
                                h-full flex flex-col gap-8 max-w-[1400px]"
                    style={{
                        opacity: !scaleImgWithContent ? 1 : 0,
                        transition: 'all 500ms',
                        height: !scaleImgWithContent ? 'auto' : 0,
                        position: 'absolute',
                        bottom: 80,
                        paddingLeft: isMobile ? 0 : 64,
                    }}
                >
                    <div className="flex items-center gap-6 ">
                        <button
                            onClick={() => {
                                onBtnClick('story')
                            }}
                            className={`${styles.btnTxt} rounded-full bg-white text-off-black 
                                        py-[12px] px-[24px] uppercase text-[18px]`}
                        >
                            My story
                        </button>
                        <button
                            onClick={() => {
                                onBtnClick('contact')
                            }}
                            className={`${styles.btnTxt} rounded-full bg-off-text text-white 
                                        py-[12px] px-[24px] uppercase text-[18px] border-white border`}
                        >
                            Let's chat
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
