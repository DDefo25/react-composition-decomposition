import NewsTabs from './NewsTabs'
import NewsList from './NewsList'
import Currency from './Currency'
import Advertising from './Advertising'

//Header отвечает за отображение верхней дополнительной информации.
//Разбивается на компоненты NewTabs, NewList, Currency и блок рекламы Advertising

export default function Header({data}) {
    return (
        <div className="row m-5">
            <div className='col'>
                <NewsTabs tabs={data.tabs}/>
                <NewsList list={data.list}/>
                <Currency list={data.currency}/>
            </div>
            <div className='col'>
                <Advertising title='Работа над ошибками' img={'https://github.com/netology-code/ra16-homeworks/blob/master/events-state/filter/img/the_ninetys_brand.jpg?raw=true'}>
                    <a href="#">Смотрите на Яндекс и запоминайте</a>
                </Advertising>
            </div>
        </div>
    )
}