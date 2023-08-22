import person1 from '../assets/teachers/teacher-1.jpg'
import person2 from '../assets/teachers/teacher-2.jpg'
import person3 from '../assets/teachers/teacher-3.jpg'

const teams = [
    {
        imageUrl: person1,
        name: 'Jacke Masito',
        position: 'Technical Architect',
        link: 'technologies',
        social : {}
    },
    {
        imageUrl: person2,
        name: 'Jacke Masito',
        position: 'Technical Architect',
        link: 'technologies',
        social : {}
    },
    {
        imageUrl: person3,
        name: 'Jacke Masito',
        position: 'Technical Architect',
        link: 'technologies',
        social : {}
    },
]

const teamData = (number = 6) => {
    return teams;
}

export default teamData;