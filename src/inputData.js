import { nanoid } from "nanoid"

const inputData = {
    header: {
        tabs: [{
            id: nanoid(),
            title: 'Сейчас в СМИ',
            href: '#',
            active: true
        }, {
            id: nanoid(),
            title: 'в Германии',
            href: '#',
        }, {
            id: nanoid(),
            title: 'Рекомендуем',
            href: '#',
        }],
        list: [{
            id: nanoid(),
            text: 'Путин упростил получение автомобильных прав',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: 'В команде Зеленского раскрыли план реформ на Украине',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
            href: '#',
            img: ''
        }], 
        currency: [{
            id: nanoid(),
            text: 'USD MOEX',
            href: '#',
            value: '63.52',
            delta: '+0.09'
        }, {
            id: nanoid(),
            text: 'EUR MOEX',
            href: '#',
            value: '70.86',
            delta: '+0.14'
        }, {
            id: nanoid(),
            text: 'НЕФТЬ',
            href: '#',
            value: '64.90',
            delta: '+1.63'
        }],
    },
    main: {
        tabs: [{
            id: nanoid(),
            title: 'Видео',
            href: '#',
        }, {
            id: nanoid(),
            title: 'Картинки',
            href: '#',
        }, {
            id: nanoid(),
            title: 'Новости',
            href: '#',
        },{
            id: nanoid(),
            title: 'Карты',
            href: '#',
        }, {
            id: nanoid(),
            title: 'Маркет',
            href: '#',
        }, {
            id: nanoid(),
            title: 'Переводчик',
            href: '#',
        }],
    },
    footer: {
        listVisited: [{
            id: nanoid(),
            text: 'Недвижимость - о сталинках',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: 'Маркет - люстры и светильники',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: 'Авто.ру - привод 4х4 до 500 000',
            href: '#',
            img: ''
        }], 
        programTV: [{
            id: nanoid(),
            text: '02:00 ТНТ. Best',
            subText: 'ТНТ International',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: '02:15 Джинглики',
            subText: 'Карусель INT',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: '02:25 Наедине со всеми',
            subText: 'Первый',
            href: '#',
            img: ''
        }], 
        broadcast: [{
            id: nanoid(),
            text: 'Управление как искусство',
            subText: 'Успех',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: 'Ночь. Мир в это время',
            subText: 'earth TV',
            href: '#',
            img: ''
        }, {
            id: nanoid(),
            text: 'Андрей Вознесенцев',
            subText: 'Совершенно секретно',
            href: '#',
            img: ''
        }], 
    }
}

export default inputData
