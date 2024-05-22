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
                    <div className="border-[1px] border-white h-full w-[120px] min-w-[120px] px-[12px] pt-[12px] flex justify-end items-end  tracking-tight">
                        <p className="text-[80px] text-white  p-0 m-0 leading-[80px] uppercase">
                            {card.icon_letter_1 ?? null}
                        </p>
                        <p
                            className={`text-[60px] text-white p-0 m-0 leading-[80px] -mb-[7px] ${card.icon_letter_1 === 'T' ? '-ml-3' : ''}`}
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
                    </div>
                </>
            ) : null}
            {card.type === 'leters_icon_and_text_and_list' ? (
                <>
                    <div className="border-[1px] border-white h-full w-[120px] min-w-[120px] px-[12px] pt-[12px] flex justify-end items-end  tracking-tight">
                        <p className="text-[80px] text-white  p-0 m-0 leading-[80px] uppercase">
                            {card.icon_letter_1 ?? null}
                        </p>
                        <p
                            className={`text-[60px] text-white p-0 m-0 leading-[80px] -mb-[7px] ${card.icon_letter_1 === 'T' ? '-ml-3' : ''}`}
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
                            <div className="flex flex-col gap-2">
                                {card.text_list.map((text, i) => (
                                    <div
                                        className="px-4 py-3 rounded-lg bg-[#3a3a3a] text-[18px]"
                                        key={`text_list_item_${i}`}
                                    >
                                        {text}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </>
            ) : null}

            {card.type === 'sub_card_list' && card.cards_list ? (
                <div className="flex flex-col gap-4">
                    {card.cards_list.map((list, i) => (
                        <div
                            className="flex flex-wrap gap-4 p-4 rounded-lg bg-card-bg"
                            key={`card_list_item_${i}`}
                        >
                            {list.map((item, i) => (
                                <div
                                    key={`sub_card_list_item_${i}`}
                                    className={`flex items-center gap-4  ${item === 'typescript' ? 'py-0' : 'border-white border-[1px] px-4'}  rounded-lg py-2`}
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
            {card.type === 'icon' && card.icon ? (
                <CardIcon icon={card.icon} />
            ) : null}
        </li>
    )
}

export default Card
