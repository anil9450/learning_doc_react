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

export function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img className="avatar" src={avatar} alt={description} />
    );
}

export function TodoList() {
    const name = 'Anil Kumar Singh Kushwaha';
    return (
        <h1>{name} is a frontend developer</h1>
    );
}

/* Start */

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export function List() {
    return (
        <h1>To Do List for {formatDate(today)}</h1>
    );
}

/* End */

export function NewList() {
    return (
        <ul style={{
            backgroundColor: 'black',
            color: 'pink',
        }}>
            <li>Anil</li>
            <li>Ankita</li>
            <li>Adwika</li>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}

/* start */

const person = {
    name: 'Anil Kumar Singh Kushwaha',
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
        backgroundColor: 'green',
        color: 'red',
    }
}

export function ListofPerson() {
    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}</h1>
                <img
                    className="avatar"
                    src={person.imageUrl}
                    alt="Gregorio Y. Zara"
                />
                <ul>
                    <li>Pulli</li>
                    <li>Tulli</li>
                    <li>Litti Chokha</li>
                </ul>
            </div>
        </>
    );
}

/* end */

/* start */

const baseUrl = 'https://i.imgur.com/';

const people = {
    name: 'Poonam Maurya',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    }
};

export function PeopleList() {
    return (
        <>
            <div style={people.theme}>
                <h1>{people.name}</h1>
                <img
                    className="avatar"
                    src={baseUrl + people.imageId + people.imageSize + '.jpg'}
                    alt={people.name}
                />
                <ul>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>
        </>
    );
}

/* end */