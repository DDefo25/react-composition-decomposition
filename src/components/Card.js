//Компонента карточек Footer

export default function Card({title, img, badge, children}) {
    return (
        <div className="card border-light" style={{width: '18rem'}}>
            <div className="row no-gutters">   
                {img ? 
                    <div className="col-md-4">
                        <img src={img} className="card-img" alt="..."></img>
                    </div> 
                : null}
                <div className="col-md-8 card-body">
                    <h5 className="card-title">{title} {badge && <span className="badge bg-info">{badge}</span>}</h5>
                    {children}
                </div>
            </div>
        </div>
    )
}