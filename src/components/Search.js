//Компонента строки поиска

export default function Search() {
    return (
        <div className='mb-3'>
            <div className="input-group mb-3">
                <img src="..." className="input-group-text mr-3" alt='...'/>
                <input type="text" className="form-control" placeholder="Поиск" aria-label="Search" aria-describedby="button-search"/>
                <button className="btn btn-outline-secondary" type="button" id="button-search">Найти</button>
            </div>
            <div className="form-text" id="basic-addon4">Найдется все. Например, <a href='#' className='text-secondary'>фаза луны сегодня</a></div>
        </div>
    )
}