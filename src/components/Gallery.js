function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Sciencitist</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export function Photo() {
    return (
        <section>
            <h1>Photos</h1>
            <img
                src="https://i.imgur.com/QIrZWGIs.jpg"
                alt="Alan L. Hart"
            />
        </section>
    );
}

export function Namephotos() {
    return (
        <section>
            <h1>Name Photos</h1>
            <img
                src="https://i.imgur.com/QIrZWGIs.jpg"
                alt="Alan L. Hart"
            />
        </section>
    );
}