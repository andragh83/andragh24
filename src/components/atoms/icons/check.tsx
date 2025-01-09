export default function CheckIcon({
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke={color ?? 'var(--icon-color-muted, #C2C2C2)'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
}
