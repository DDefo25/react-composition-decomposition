//Компонента новостного списка в header

export default function NewsList({list}) {
    return (
        <ul className='mb-3 list-group list-group-flush'>
            {list.map(el => {
                return <li key={el.id} className="news list-group-item">
                    <img src={el.img} className="rounded me-2" alt="..." />
                    <strong className="me-auto"><a href={el.href}>{el.text}</a></strong>
                </li>
            })}
        </ul>
    )
}