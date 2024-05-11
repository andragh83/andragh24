
import Card from '../atoms/Card'

export default function Skills(){
    return <ul role="list" className="grid grid-cols-1 gap-3 p-6 overflow-y-auto rounded-lg bg-gradient-to-b from-[#2727277f] to-[#181818]">
    <Card
        title="Documentation"
        body="Learn how Astro works and explore the official API docs."
    />
    <Card
        title="Integrations"
        body="Supercharge your project with new frameworks and libraries."
    />
    <Card
        title="Themes"
        body="Explore a galaxy of community-built starter themes."
    />
    <Card
        title="Community"
        body="Come say hi to our amazing Discord community. ❤️"
    />
    <Card
        title="Documentation"
        body="Learn how Astro works and explore the official API docs."
    />
    <Card
        title="Integrations"
        body="Supercharge your project with new frameworks and libraries."
    />
    <Card
        title="Themes"
        body="Explore a galaxy of community-built starter themes."
    />
    <Card
        title="Community"
        body="Come say hi to our amazing Discord community. ❤️"
    />
</ul>
}



{/* <style>
    .link-card-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 2rem;
        background: linear-gradient(#2727277f 40%, #181818 60%);
    }
</style> */}
