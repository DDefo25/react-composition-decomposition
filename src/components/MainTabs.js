
//Компонента основных вкладок над строкой поиска

export default function MainTabs({tabs}) {
    return (
        <div className='mb-3'>
            <ul className="nav">
                {tabs.map(tab => {
                    return <li key={tab.id} className="nav-item">
                        <a className="nav-link" aria-current="page" href={tab.href}>{tab.title}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}