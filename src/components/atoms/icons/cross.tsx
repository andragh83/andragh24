export default function CrossIcon({
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
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.803953 23.4986C1.47243 24.1671 2.55624 24.1671 3.22472 23.4986L12 14.7234L20.7753 23.4986C21.4438 24.1671 22.5276 24.1671 23.196 23.4986L23.4986 23.196C24.1671 22.5276 24.1671 21.4438 23.4986 20.7753L14.7234 12L23.4986 3.22472C24.1671 2.55624 24.1671 1.47243 23.4986 0.803952L23.196 0.501356C22.5276 -0.16712 21.4438 -0.167118 20.7753 0.501358L12 9.27664L3.22472 0.501357C2.55624 -0.167119 1.47243 -0.167119 0.803953 0.501357L0.501356 0.803954C-0.167119 1.47243 -0.167119 2.55624 0.501357 3.22472L9.27664 12L0.501357 20.7753C-0.167118 21.4438 -0.16712 22.5276 0.501356 23.196L0.803953 23.4986Z"
                fill={color ?? 'white'}
            />
        </svg>
    )
}
