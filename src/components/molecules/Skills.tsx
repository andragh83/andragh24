import { data, skills_cards_list } from '@components/data'
import Card from '../atoms/card/Card'
import React from 'react'

export default function Skills() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-4 w-full">
            {skills_cards_list.map((card_id) => (
                <React.Fragment key={`card_${card_id}`}>
                    <Card card={data[card_id]} />
                </React.Fragment>
            ))}
        </ul>
    )
}
