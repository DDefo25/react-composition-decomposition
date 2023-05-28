import MainTabs from './MainTabs'
import Search from './Search'
import Advertising from './Advertising'

//Main содержит компоненту основной строки поиска Search, вкладки MainTabs и блок рекламы

export default function Main({data}) {
    return (
        <div className='container'>
            <MainTabs tabs={data.tabs}/>
            <Search />
            <Advertising />
        </div>
    )
}