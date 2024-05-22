export default function InstaIcon({
    color,
    size,
}: {
    color?: string
    size?: number
}) {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 4.5C15.658 4.5 15.112 4.52 13.406 4.596C11.7 4.676 10.538 4.944 9.52 5.34C8.45169 5.74065 7.48428 6.3708 6.686 7.186C5.8708 7.98428 5.24065 8.95169 4.84 10.02C4.444 11.036 4.174 12.2 4.096 13.9C4.02 15.61 4 16.154 4 20.502C4 24.846 4.02 25.39 4.096 27.096C4.176 28.8 4.444 29.962 4.84 30.98C5.25 32.032 5.796 32.924 6.686 33.814C7.574 34.704 8.466 35.252 9.518 35.66C10.538 36.056 11.698 36.326 13.402 36.404C15.11 36.48 15.654 36.5 20 36.5C24.346 36.5 24.888 36.48 26.596 36.404C28.298 36.324 29.464 36.056 30.482 35.66C31.5496 35.2591 32.5163 34.629 33.314 33.814C34.204 32.924 34.75 32.032 35.16 30.98C35.554 29.962 35.824 28.8 35.904 27.096C35.98 25.39 36 24.846 36 20.5C36 16.154 35.98 15.61 35.904 13.902C35.824 12.2 35.554 11.036 35.16 10.02C34.7593 8.95169 34.1292 7.98428 33.314 7.186C32.5157 6.3708 31.5483 5.74065 30.48 5.34C29.46 4.944 28.296 4.674 26.594 4.596C24.886 4.52 24.344 4.5 19.996 4.5H20ZM18.566 7.384H20.002C24.274 7.384 24.78 7.398 26.466 7.476C28.026 7.546 28.874 7.808 29.438 8.026C30.184 8.316 30.718 8.664 31.278 9.224C31.838 9.784 32.184 10.316 32.474 11.064C32.694 11.626 32.954 12.474 33.024 14.034C33.102 15.72 33.118 16.226 33.118 20.496C33.118 24.766 33.102 25.274 33.024 26.96C32.954 28.52 32.692 29.366 32.474 29.93C32.2157 30.6238 31.8065 31.2516 31.276 31.768C30.716 32.328 30.184 32.674 29.436 32.964C28.876 33.184 28.028 33.444 26.466 33.516C24.78 33.592 24.274 33.61 20.002 33.61C15.73 33.61 15.222 33.592 13.536 33.516C11.976 33.444 11.13 33.184 10.566 32.964C9.87167 32.7065 9.2432 32.298 8.726 31.768C8.19455 31.2512 7.78466 30.6227 7.526 29.928C7.308 29.366 7.046 28.518 6.976 26.958C6.9 25.272 6.884 24.766 6.884 20.492C6.884 16.218 6.9 15.716 6.976 14.03C7.048 12.47 7.308 11.622 7.528 11.058C7.818 10.312 8.166 9.778 8.726 9.218C9.286 8.658 9.818 8.312 10.566 8.022C11.13 7.802 11.976 7.542 13.536 7.47C15.012 7.402 15.584 7.382 18.566 7.38V7.384ZM28.542 10.04C28.2899 10.04 28.0402 10.0897 27.8072 10.1862C27.5743 10.2826 27.3626 10.4241 27.1844 10.6024C27.0061 10.7806 26.8646 10.9923 26.7682 11.2252C26.6717 11.4582 26.622 11.7079 26.622 11.96C26.622 12.2121 26.6717 12.4618 26.7682 12.6948C26.8646 12.9277 27.0061 13.1394 27.1844 13.3176C27.3626 13.4959 27.5743 13.6374 27.8072 13.7338C28.0402 13.8303 28.2899 13.88 28.542 13.88C29.0512 13.88 29.5396 13.6777 29.8996 13.3176C30.2597 12.9576 30.462 12.4692 30.462 11.96C30.462 11.4508 30.2597 10.9624 29.8996 10.6024C29.5396 10.2423 29.0512 10.04 28.542 10.04ZM20.002 12.284C18.9121 12.267 17.8298 12.467 16.818 12.8723C15.8061 13.2776 14.885 13.8801 14.1083 14.6448C13.3316 15.4096 12.7147 16.3211 12.2937 17.3265C11.8726 18.3319 11.6558 19.411 11.6558 20.501C11.6558 21.591 11.8726 22.6701 12.2937 23.6755C12.7147 24.6809 13.3316 25.5924 14.1083 26.3572C14.885 27.1219 15.8061 27.7244 16.818 28.1297C17.8298 28.535 18.9121 28.735 20.002 28.718C22.1591 28.6843 24.2164 27.8038 25.73 26.2665C27.2435 24.7292 28.0918 22.6583 28.0918 20.501C28.0918 18.3437 27.2435 16.2728 25.73 14.7355C24.2164 13.1982 22.1591 12.3177 20.002 12.284ZM20.002 15.166C20.7025 15.166 21.3961 15.304 22.0432 15.572C22.6904 15.8401 23.2784 16.233 23.7737 16.7283C24.269 17.2236 24.6619 17.8116 24.93 18.4588C25.198 19.1059 25.336 19.7995 25.336 20.5C25.336 21.2005 25.198 21.8941 24.93 22.5412C24.6619 23.1884 24.269 23.7764 23.7737 24.2717C23.2784 24.767 22.6904 25.1599 22.0432 25.428C21.3961 25.696 20.7025 25.834 20.002 25.834C18.5873 25.834 17.2306 25.272 16.2303 24.2717C15.23 23.2714 14.668 21.9147 14.668 20.5C14.668 19.0853 15.23 17.7286 16.2303 16.7283C17.2306 15.728 18.5873 15.166 20.002 15.166Z"
                fill="white"
            />
        </svg>
    )
}
