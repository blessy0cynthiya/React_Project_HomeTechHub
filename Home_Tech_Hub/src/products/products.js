import fern from 'assets/shop/fern.png'
import peaceLily from 'assets/shop/peaceLily.png'
import pothos from 'assets/shop/pothos.jpg'
import rubberTree from 'assets/shop/rubberTree.jpeg'
import fiddleLeaf from 'assets/shop/fiddleLeaf.jpeg'
import dracaena from 'assets/shop/dracaena.png'
import snake from 'assets/shop/snake.jpg'
import ponytail from 'assets/shop/ponytail.jpg'
import moneyPlant from 'assets/shop/moneyPlant.png'
import zz from 'assets/shop/zz.jpg'
import monstera from 'assets/shop/monstera.jpg'
//import monsteraMinima from 'assets/shop/monsteraMinima.jpeg'
import satinPothos from 'assets/shop/satinPothos.png'
import succulentTrio from 'assets/shop/succulentTrio.png'
import cactusTrio from 'assets/shop/cactusTrio.webp'

let products = [
    {
        id: 1,
        name: "Scoole",
        light: 'Low Light',
        price: 20000.00,
        purify: true,
        beginner: true,
        petFriendly: true,
        img: fern
    },
    {
        id: 2,
        name: "VOLTAS",
        light: 'Low to Medium Light',
        price: 50000.00,
        purify: true,
        beginner: true,
        petFriendly: false,
        img: peaceLily
    },
    {
        id: 3,
        name: "SAMSUNG",
        light: 'Low to Medium Light',
        price: 75000.00,
        purify: true,
        beginner: true,
        petFriendly: false,
        img: pothos
    },
    {
        id: 4,
        name: "LG",
        light: 'Medium Light',
        price: 20000.00,
        purify: true,
        beginner: true,
        petFriendly: true,
        img: rubberTree
    },
    {
        id: 5,
        name: "Silver OnePlus 9 Mobile Phone, Snapdragon, Dimension: 6.55 Inch",
        light: 'Medium to Bright Light',
        price: 50000.00,
        purify: false,
        beginner: false,
        petFriendly: false,
        img: fiddleLeaf
    },
    {
        id: 6,
        name: "LG 9Kg Front Load Washing Machine",
        light: 'Low to Medium Light',
        price: 50000.00,
        purify: false,
        beginner: true,
        petFriendly: false,
        img: dracaena
    },
    {
        id: 7,
        name: "Hitachi AC",
        light: 'Low Light',
        price: 85000.00,
        purify: true,
        beginner: true,
        petFriendly: false,
        img: snake
    },
    {
        id: 8,
        name: "Redmi sold 6.7 million 5G phone",
        light: 'Medium to Bright Light',
        price: 19000.00,
        purify: false,
        beginner: true,
        petFriendly: true,
        img: ponytail
    },
    {
        id: 9,
        name: "Realme x2 5G Best Second Hand Smartphone",
        light: 'Medium to Bright Light',
        price: 30000.00,
        purify: false,
        beginner: false,
        petFriendly: true,
        img: moneyPlant
    },
    {
        id: 10,
        name: "ZZ Plant",
        light: 'Low to Medium Light',
        price: 90000.00,
        purify: true,
        beginner: true,
        petFriendly: false,
        img: zz
    },
    {
        id: 11,
        name: "HP Laptop 15s-FQ5202TU",
        light: 'Medium to Bright Light',
        price: 55000.00,
        purify: false,
        beginner: false,
        petFriendly: false,
        img: monstera
    },
    /*{
        id: 12,
        name: "Monstera Minima",
        light: 'Medium to Bright Light',
        price: 75000.50,
        purify: false,
        beginner: false,
        petFriendly: false,
        img: monsteraMinima
    },*/
    {
        id: 13,
        name: "TCL",
        light: 'Low to Medium Light',
        price: 13000.00,
        purify: true,
        beginner: true,
        petFriendly: false,
        img: satinPothos
    },
    {
        id:14,
        name: "Windows 10 Acer Laptop",
        light: 'Medium Light',
        price: 40000.00,
        purify: false,
        beginner: true,
        petFriendly: false,
        succulent: true,
        img: succulentTrio
    },
    {
        id: 15,
        name: "ThinkPad L14 Gen 4 (14, Intel)",
        light: 'Medium Light',
        price: 60000.00,
        purify: false,
        beginner: true,
        petFriendly: false,
        succulent: true,
        img: cactusTrio
    },

]

export default products