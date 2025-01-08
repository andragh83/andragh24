import type { ICard, ICardIcon } from '@components/data'
import styles from '../card/styles.module.css'
import CardIcon from '../icons'
interface Props {
    card: ICard
}

const Card = ({ card }: Props) => {
    let hasLeftSide =
        card.icon_letter_1 ||
        card.icon_letter_2 ||
        card.type === 'icon_and_text'
            ? true
            : false
    return (
        <li
            className={`${styles.linkCard} ${hasLeftSide ? 'gap-4' : ''} 
                ${
                    card.style === 'outlined'
                        ? '!bg-transparent border-[1px] rounded-lg border-border-default'
                        : card.type === 'icon'
                          ? 'items-center justify-center'
                          : ''
                }`}
        >
            {card.type === 'icon_and_text' ? (
                <div className="flex item-center gap-4 p-4 rounded-lg bg-card-bg w-full text-[22px]">
                    <CardIcon icon={card.text as ICardIcon} />
                    <p className="uppercase font-sans m-0 p-0 leading-0 self-center">
                        {card.text}
                    </p>
                </div>
            ) : null}
            {card.type === 'leters_icon_and_text' ? (
                <>
                    <div className="border-[1px] border-border-default h-full w-[100px] min-w-[100px] sm:w-[120px] sm:min-w-[120px] px-[12px] pt-[12px] flex justify-end items-end tracking-tight">
                        <p className="text-[60px] leading-[60px] sm:text-[80px] sm:leading-[80px] text-text-default p-0 m-0  uppercase">
                            {card.icon_letter_1 ?? null}
                        </p>
                        <p
                            className={`text-[40px] leading-[60px] sm:text-[60px] sm:leading-[80px] text-text-default p-0 m-0 -mb-[7px] ${card.icon_letter_1 === 'T' ? '-ml-3' : ''}`}
                        >
                            {card.icon_letter_2 ?? null}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {card.title ? (
                            <p className={`${styles.cardTitle}`}>
                                {card.title}
                            </p>
                        ) : null}
                        {card.sub_title ? (
                            <p className={`${styles.cardSubtitle}`}>
                                {card.sub_title}
                            </p>
                        ) : null}
                        {card.text ? (
                            <p className={`${styles.cardText}`}>{card.text}</p>
                        ) : null}

                        {card.text_2 ? (
                            <p className={`${styles.cardText}`}>
                                {card.text_2}
                            </p>
                        ) : null}

                        {card.text_3 ? (
                            <p className={`${styles.cardText}`}>
                                {card.text_3}
                            </p>
                        ) : null}

                        {card.text_list ? (
                            <ul className="flex flex-col gap-2">
                                {card.text_list.map((text, i) => (
                                    <li
                                        className="px-4 py-2 rounded-lg bg-card-bg text-[14px] md:text-[16px]"
                                        key={`text_list_item_${i}`}
                                    >
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {card.url_text && card.url ? (
                            <a
                                className={`px-4 py-3 rounded-full bg-btn-bg text-bg-color-default w-auto text-[14px] leading-[14px] text-center mt-4 hover:bg-text-default md:w-fit uppercase`}
                                href={card.url}
                                target={
                                    card.url_external ? '_blank' : undefined
                                }
                            >
                                {card.url_text}
                            </a>
                        ) : null}
                    </div>
                </>
            ) : null}
            {card.type === 'leters_icon_and_text_and_list' ? (
                <>
                    <div className="border-[1px] border-border-muted h-full w-[100px] min-w-[100px] sm:w-[120px] sm:min-w-[120px]  px-[12px] pt-[12px] flex justify-end items-end  tracking-tight">
                        <p className="text-[80px] text-text-default  p-0 m-0 leading-[80px] uppercase">
                            {card.icon_letter_1 ?? null}
                        </p>
                        <p
                            className={`text-[60px] text-text-default p-0 m-0 leading-[80px] -mb-[7px] ${card.icon_letter_1 === 'T' ? '-ml-3' : ''}`}
                        >
                            {card.icon_letter_2 ?? null}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {card.text ? (
                            <p className={`${styles.cardText}`}>{card.text}</p>
                        ) : null}
                        {card.text_2 ? (
                            <p className={styles.cardText}>{card.text_2}</p>
                        ) : null}
                        {card.text_list ? (
                            <ul className="flex flex-col gap-2">
                                {card.text_list.map((text, i) => (
                                    <li
                                        className="px-4 py-1 rounded-lg bg-card-bg text-[18px]"
                                        key={`text_list_item_${i}`}
                                    >
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </>
            ) : null}

            {card.type === 'sub_card_list' && card.cards_list ? (
                <div className="flex flex-col gap-4 w-full">
                    {card.cards_list.map((list, i) => (
                        <div
                            className="flex flex-wrap gap-4 p-4 rounded-lg bg-card-bg"
                            key={`card_list_item_${i}`}
                        >
                            {list.map((item, i) => (
                                <div
                                    key={`sub_card_list_item_${i}`}
                                    className={`flex items-center gap-2  ${item === 'typescript' ? 'py-0' : 'border-border-muted border-[1px] px-5'}  rounded-lg py-2`}
                                >
                                    <div
                                        className={
                                            item === 'typescript'
                                                ? 'border-border-muted border-[1px] px-2 py-3'
                                                : ''
                                        }
                                    >
                                        <CardIcon icon={item} size={28} />
                                    </div>
                                    <p className="uppercase text-text-default text-[18px] leading-[18px]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : null}
            {card.type === 'icon' && card.url_icon ? (
                <a href={card.url} target="_blank">
                    <CardIcon icon={card.url_icon} size={28} />
                </a>
            ) : null}
        </li>
    )
}

export default Card
