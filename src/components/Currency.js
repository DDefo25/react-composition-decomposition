//Компонента блока валюты

export default function Currency({list}) {
    return (
        <div className='mb-3'>
            <ul className="nav">
                {list.map(currency => {
                    return <li key={currency.id} className="nav-item">
                        <strong className="me-auto"><a className="nav-link" aria-current="page" href={currency.href}>{currency.text + ' ' + currency.value}</a></strong>
                        <span className='text-secondary'>{currency.delta}</span>
                    </li>
                })}
            </ul>
        </div>  
    )
}
