import award1 from './award1.png'
import award2 from './award2.png'
import award3 from './award3.png'
import certificate from './certificate.png'
import facebook from './facebook.png'
import hero from './hero.png'
import instagram from './instagram.png'
import man from './man.png'
import youtube from './youtube.png'

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
        title: "Web Development",
        number: "10+",
        color: "#FF6B6B",
        image: hero
    },
    {
        id: 2,
        title: "UI/UX Design",
        number: "5+",
        color: "#4ECDC4",
        image: certificate
    },
    {
        id: 3,
        title: "Mobile Apps",
        number: "3+",
        color: "#45B7D1",
        image: man
    }
]

export default images