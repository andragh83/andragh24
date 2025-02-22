export default function WebsiteIcon({
    color,
    size,
}: {
    color?: string
    size?: number
}) {
    return (
        <svg
            width={size ?? '24'}
            height={size ?? '24'}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color ?? 'currentColor'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
