export default function EmailIcon({
    color,
    size,
}: {
    color?: string
    size?: number
}) {
    return (
        <svg
            width={size ?? '40'}
            height={size ?? '40'}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 32C7.175 32 6.469 31.7065 5.882 31.1195C5.295 30.5325 5.001 29.826 5 29V11C5 10.175 5.294 9.469 5.882 8.882C6.47 8.295 7.176 8.001 8 8H32C32.825 8 33.5315 8.294 34.1195 8.882C34.7075 9.47 35.001 10.176 35 11V29C35 29.825 34.7065 30.5315 34.1195 31.1195C33.5325 31.7075 32.826 32.001 32 32H8ZM20 21.5L8 14V29H32V14L20 21.5ZM20 18.5L32 11H8L20 18.5ZM8 14V11V29V14Z"
                fill={color ?? '#C2C2C2'}
            />
        </svg>
    )
}
