export default function SupabaseIcon({
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
                d="M18.5355 6.27516V22.8752H8.13309C7.15146 22.8752 6.56541 21.7308 7.19102 20.925L18.5355 6.27516ZM21.4657 14.2059V5.88833C21.4657 3.24476 18.1003 2.05799 16.4579 4.17899L4.87026 19.1383C2.77953 21.8388 4.68712 25.7933 8.13309 25.7933H18.5355V34.1108C18.5355 36.7544 21.8994 37.9411 23.5433 35.8202L35.1295 20.8594C37.2202 18.1603 35.3141 14.2059 31.8667 14.2059H21.4657ZM21.4657 17.1254H31.8681C32.8483 17.1254 33.4343 18.2698 32.8102 19.0756L21.4657 33.724V17.1254Z"
                fill={color ?? '#C2C2C2'}
            />
        </svg>
    )
}
