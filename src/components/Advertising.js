//Компонента рекламного блока

export default function Advertising({img, title, children}) {
    return (
        <div className="media">
            <img src={img} className="align-self-start mr-3" alt="..."/>
            { title && children && 
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    {children}
                </div>
            }
        </div>
    )
}

