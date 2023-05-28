import Card from './Card'

//Footer отвечает за отображение нижней дополнительной информации. 
//Заполняется карточками Card

export default function Footer({data}) {
    return (
        <div className='d-flex m-5 flex-column flex-wrap align-items-start' style={{height: '65vh'}}>
            <Card title="Погода" img={'https://github.com/netology-code/ra16-homeworks/blob/master/events-state/filter/img/place200x290.png?raw=true'}>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </Card>
            <Card title='Посещаемое'>
                <ul className='mb-3 list-group list-group-flush'>
                    {data.listVisited.map(el => {
                        return <li key={el.id} className="list-group-item">
                            <strong className="me-auto"><a href={el.href}>{el.text}</a></strong>
                        </li>
                    })}
                </ul>
            </Card>
            <Card title='Карта Германии'>
                <a href="#">Расписания</a>    
            </Card>
            <Card title='Телепрограмма' badge='Эфир'>
                <ul className='mb-3 list-group list-group-flush'>
                    {data.programTV.map(el => {
                        return <li key={el.id} className="list-group-item">
                            <a href={el.href}>{el.text}{el.subText && <span className='text-secondary'>{" " + el.subText}</span>}</a>
                        </li>
                    })}
                </ul>  
            </Card>
            <Card title='Эфир'>
                <ul className='mb-3 list-group list-group-flush'>
                    {data.broadcast.map(el => {
                        return <li key={el.id} className="list-group-item">
                            <a href={el.href}>{el.text}{el.subText && <span className='text-secondary'>{" " + el.subText}</span>}</a>
                        </li>
                    })}
                </ul> 
            </Card>
        </div>
    )
}