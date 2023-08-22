import job1 from '../assets/research/research-1.jpg'
import job2 from '../assets/research/research-2.jpg'
import job3 from '../assets/research/research-3.jpg'
import job4 from '../assets/research/research-4.jpg'
import job5 from '../assets/research/research-5.jpg'
import job6 from '../assets/research/research-6.jpg'

const jobs = [
    {
        imageUrl: job1,
        title: 'JOb 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
    {
        imageUrl: job2,
        title: 'JOb 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
    {
        imageUrl: job3,
        title: 'JOb 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
    {
        imageUrl: job4,
        title: 'JOb 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
    {
        imageUrl: job5,
        title: 'JOb 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
    {
        imageUrl: job6,
        title: 'JOb 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        
    },
]

const careerData = (number = 6) => {
    return jobs;
}

export default careerData;