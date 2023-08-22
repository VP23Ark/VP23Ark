import blog1 from '../assets/blog/post-1.jpg'
import blog2 from '../assets/blog/post-2.jpg'
import blog3 from '../assets/blog/post-3.jpg'

const blogs = [
    {
        imageUrl: blog1,
        title: 'Lorem ipsum dolor amet, adipisicing eiusmod tempor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        author: 'pauly',
        date: 'August 23 2023'
    },
    {
        imageUrl: blog2,
        title: 'Lorem ipsum dolor amet, adipisicing eiusmod tempor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        author: 'pauly',
        date: 'August 23 2023'
    },
    {
        imageUrl: blog3,
        title: 'Lorem ipsum dolor amet, adipisicing eiusmod tempor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        link: 'technologies',
        author: 'pauly',
        date: 'August 23 2023'
    }
]

const blogData = (number = 6) => {
    return blogs;
}

export default blogData;