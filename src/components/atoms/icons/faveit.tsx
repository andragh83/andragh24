export default function FaveitIcon({ theme }: { theme?: 'light' | 'dark' }) {
    return (
        <svg
            width="177"
            height="80"
            viewBox="0 0 177 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="136.56" cy="40" r="40" fill="#DDFAE3" />
            <path
                d="M55.515 25.9701L66.5759 53.0999L77.5933 25.9701H80.7722L67.9694 56.8884H65.1824L52.3361 25.9701H55.515Z"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <path
                d="M25.7088 57.0284L36.7698 29.8987L47.7872 57.0284H50.9661L38.1633 26.1101H35.3763L22.5299 57.0284H25.7088Z"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="0.440308"
                y="26.1102"
                width="20.8955"
                height="2.38806"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="0.440308"
                y="40.14"
                width="11.9403"
                height="2.38806"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="87.6045"
                y="26.1102"
                width="20.8955"
                height="2.38806"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="87.6045"
                y="54.4684"
                width="20.8955"
                height="2.38806"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="87.6045"
                y="40.14"
                width="11.9403"
                height="2.38806"
                fill={theme === 'light' ? '#343434' : '#fff'}
            />
            <rect
                x="126.112"
                y="25.9702"
                width="20.8955"
                height="2.98507"
                fill={'#343434'}
            />
            <rect
                x="135.366"
                y="57.0149"
                width="17.0149"
                height="2.98507"
                transform="rotate(-90 135.366 57.0149)"
                fill={'#343434'}
            />
            <circle cx="136.858" cy="34.0298" r="1.49254" fill={'#343434'} />
        </svg>
    )
}
