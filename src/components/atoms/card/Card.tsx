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
                        ? '!bg-transparent border-[1px] rounded-lg border-[#616161]'
                        : card.type === 'icon_and_text'
                          ? 'items-center'
                          : card.type === 'icon'
                            ? 'items-center justify-center'
                            : ''
                }`}
        >
            {card.type === 'icon_and_text' ? (
                <CardIcon icon={card.text as ICardIcon} />
            ) : null}
            {hasLeftSide && card.type !== 'icon_and_text' ? (
                <div className="border-[1px] border-white w-[120px] min-w-[120px] px-[12px] flex justify-end items-end  tracking-tight">
                    <p className="text-[80px] text-white  p-0 m-0 leading-[80px] uppercase">
                        {card.icon_letter_1 ?? null}
                    </p>
                    <p
                        className={`text-[60px] text-white p-0 m-0 leading-[80px] -mb-[7px] ${card.icon_letter_1 === 'T' ? '-ml-3' : ''}`}
                    >
                        {card.icon_letter_2 ?? null}
                    </p>
                </div>
            ) : null}
            {card.text ? (
                <div className="flex flex-col gap-4">
                    {card.text ? (
                        <p
                            className={`${styles.cardText} ${card.type === 'icon_and_text' ? 'uppercase !font-sans' : ''}`}
                        >
                            {card.text}
                        </p>
                    ) : null}
                    {card.text_2 ? (
                        <p className={styles.cardText}>{card.text_2}</p>
                    ) : null}
                    {card.text_list ? (
                        <div className="flex flex-col gap-2">
                            {card.text_list.map((text) => (
                                <div className="px-4 py-3 rounded-lg bg-[#272727] text-[18px]">
                                    {text}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : null}
            {card.cards_list ? (
                <div className="flex flex-col gap-4">
                    {card.cards_list.map((list) => (
                        <div className="flex flex-wrap gap-4 p-4 rounded-lg bg-[#3c3c3c]">
                            {list.map((item) => (
                                <div
                                    className={`flex items-center gap-4  ${item === 'typescript' ? '' : 'border-white border-[1px] px-4 '}  rounded-lg py-2`}
                                >
                                    <div
                                        className={
                                            item === 'typescript'
                                                ? 'border-[#C2C2C2] border-[1px] px-2 py-3'
                                                : ''
                                        }
                                    >
                                        <CardIcon icon={item} />
                                    </div>
                                    <p className="uppercase text-white text-[22px]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : null}
            {card.icon ? <CardIcon icon={card.icon} /> : null}
        </li>
    )
}

export default Card
