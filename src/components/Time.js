import moment from 'moment'

//Компонента блока времени

export default function Time({format}) {
    return (
        <div>
            {moment().format(format)}
        </div>
    )
}