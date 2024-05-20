import { data, work_cards_list } from '@components/data'
import Card from '../atoms/card/Card'
import React from 'react'

export default function Work() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-4 w-full">
            {work_cards_list.map((card_id) => (
                <React.Fragment key={`card_${card_id}`}>
                    <Card card={data[card_id]} />
                </React.Fragment>
            ))}
        </ul>
    )
}

{
    /* <style>
    .link-card-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 2rem;
        background: linear-gradient(#2727277f 40%, #181818 60%);
    }
</style> */
}
