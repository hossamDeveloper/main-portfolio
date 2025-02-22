import award1 from './award1.png'
import award2 from './award2.png'
import award3 from './award3.png'
import certificate from './certificate.png'
import facebook from './facebook.png'
import hero from './hero.png'
import instagram from './instagram.png'
import man from './man.png'
import youtube from './youtube.png'
import landingPage from './landing-page.jpg'
import EmadAfandi from './EmadAfandi.jpg'
import ChatApp from './ChatApp.jpg'
import Portfolio from './Portfolio.jpg'
import QRCode from './QRCode.jpg'
import service1 from './service1.png'
import service2 from './service2.png'
import service3 from './service3.png'



const images = {
    award1,
    award2,
    award3,
    certificate,
    facebook,
    hero,
    instagram,
    man,
    youtube,
}


export const imageServices = [
    {
        id: 1,
        image: service1,
        color: '#da4d62',
        title: 'Web Development',
        number: 25
    },
    {
        id: 2,
        image: service2,
        color: '#095256',
        title: 'UI/UX Design',
        number: 20
    },
    {
        id: 3,
        image: service3,
        color: '#605710',
        title: 'App Development',
        number: 35
    }
]


export const dataWebsite = [
    {
        id: 1,
        image: EmadAfandi,
        title: 'Emad Afani Coffee Shop',
        description: 'A website for a coffee shop that sells different types of coffee and has a blog for news and updates and also to show their work to their friends.',
        link: 'https://github.com/hossamDeveloper/EmadAfandiCoffee',
        colorGradiant: 'linear-gradient(to right, #12071f, #210b3a)'
    },
    {
        id: 2,
        image: ChatApp,
        title: 'Chat App With Frinds',
        description: 'A chat app that allows users to send messages to their friends and also to show their work to their friends.',
        link: 'https://github.com/hossamDeveloper/Chat-App',
        colorGradiant: 'linear-gradient(to right, #210b3a, #27084a)'
    },
    {
        id: 3,
        image: Portfolio,
        title: 'Portfolio for everyone',
        description: 'A portfolio for everyone to show their work and skills to the world and also to show their work to their friends.',
        link: 'https://github.com/hossamDeveloper/Portfolio',
        colorGradiant: 'linear-gradient(to right, #27084a, #220345)'
    },
    {
        id: 4,
        image: QRCode,
        title: 'QR Code Generator for anything',
        description: 'A website that allows users to generate QR codes for anything they want and also to show their work to their friends.',
        link: 'https://github.com/hossamDeveloper/QRCodeGenerator',
        colorGradiant: 'linear-gradient(to right, #220345, #2a0159)'
    },
    {
        id: 5,
        image: landingPage,
        title: 'Landing Page for school',
        description: 'A landing page for a school that sells different types of books and has a blog for news and updates and also to show their work.',
        link: 'https://github.com/hossamDeveloper/University',
        colorGradiant: 'linear-gradient(to right, #2a0159, #12071f)'
    }
]




export default images