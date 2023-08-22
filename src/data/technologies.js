import technology1 from '../assets/events/event-1.jpg'
import technology2 from '../assets/events/event-2.jpg'
import technology3 from '../assets/events/event-3.jpg'

const technology = [
    {
        imageUrl: technology1,
        title: 'Programming',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        spanText: '1'
    },
    {
        imageUrl: technology2,
        title: 'Programming',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        spanText: '2'
    },
    {
        imageUrl: technology3,
        title: 'Programming',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        spanText: '3'
    }
]

const technologyData = (number = 6) => {
    return technology;
}

export default technologyData;