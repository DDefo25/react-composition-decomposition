import Time from "./Time"

//Компонента вкладок новостей

export default function NewsTabs({tabs}) {
    return (
        <div className='mb-3'>
            <ul className="nav">
                {tabs.map(tab => {
                    return <li key={tab.id} className="nav-item">
                        <a className={"nav-link" + tab.active} aria-current="page" href={tab.href}>{tab.title}</a>
                    </li>
                })}
                <li>
                    <Time format={'D MMM, dddd HH:mm'}/>
                </li>
            </ul>

        </div>  
    )
}