import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const ImageCarousel = ({
    images,
    isScaled,
}: {
    images: ImageMetadata[]
    isScaled: boolean
    isMobile?: boolean
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [imageLoading, setImageLoading] = useState<boolean>(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            {images.map((image, index) => {
                return (
                    <img
                        key={index}
                        src={image.src}
                        width={image.width}
                        onLoad={() => {
                            setImageLoading(false)
                        }}
                        alt="Andra Gh image"
                        className={`absolute opacity-0 z-0 top-0 bottom-0 left-0 right-0 w-full h-full 
                            rounded-lg object-cover ${styles.flipHorizontally}`}
                        style={
                            isScaled
                                ? {
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover',
                                      objectPosition: 'right top',
                                      transition: 'all 500ms',
                                      opacity:
                                          index === currentImageIndex ? 1 : 0,
                                  }
                                : {
                                      objectPosition: 'right top',
                                      opacity:
                                          index === currentImageIndex ? 1 : 0,
                                  }
                        }
                    />
                )
            })}

            <div
                className={`absolute z-1 top-0 bottom-0 left-0 right-0 w-full h-full 
                            rounded-lg overflow-hidden`}
                style={{
                    opacity: imageLoading ? 1 : 0,
                    transition: 'opacity 200ms',
                }}
            >
                <div className="relative w-full h-full">
                    <div className={styles.shimmer} />
                </div>
            </div>
        </>
    )
}

export default ImageCarousel
