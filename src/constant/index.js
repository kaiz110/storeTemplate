import { Dimensions, StyleSheet } from "react-native"


export const SCREEN_WIDTH = Dimensions.get('window').width

export const SCREEN_HEIGHT = Dimensions.get('window').height

export const LOGIN_TITLE = [
    'Welcome to Shopertino',
    'Shop & get updates on new products and',
    'sales with our mobile app'
]

//

export const PRODUCT_IN_BAG = 0

export const CONSTANT_STYLE = StyleSheet.create({
    productPrice: {
        fontWeight: 'bold'
    },
    productName: {
        fontSize: 12,
        opacity: 0.6,
    }
})
// DATA

export const WELCOME_IMAGES = [
    'https://i.imgur.com/UYiroysl.jpg',
    'https://i.imgur.com/UPrs1EWl.jpg',
    'https://i.imgur.com/MABUbpDl.jpg',
    'https://i.imgur.com/KZsmUi2l.jpg',
    'https://i.imgur.com/2nCt3Sbl.jpg',
]

export const SHOP_CATEGORY = [
    {
        title: 'CLOTHING',
        image: 'https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=6&m=1257563298&s=170667a&w=0&h=5KjlxE-MPSPwljxhHNVaZsdezlhNZdCzVwOtV7plJH0='
    },
    {
        title: 'ACCESSORIES',
        image: 'https://file.hstatic.net/200000255739/file/trang-suc-b-_-m-bm_efd73ffd29a84baa945039eeed30c13b.jpg'
    },
    {
        title: 'SHOES',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghi-best-comfortable-shoes-1596050818.png?crop=0.997xw:0.997xh;0,0&resize=1200:*'
    },
    {
        title: 'WATCHES',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/watches-1613654247.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
        title: 'BAGS',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tote-bags-1621264187.png?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
        title: 'DRESSES',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-dresses-1-1599681790.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
        title: 'HATS',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-bucket-hats-to-keep-the-sun-off-your-nose-1618996574.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
        title: 'SUNGLASSES',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/round-sunglasses-1618524989.png?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
]

export const NEW_ARRIVALS = [
    {
        name: 'Cloth 1',
        price: 163.2,
        image: 'https://i.imgur.com/Fg82p7e.jpg'
    },
    {
        name: 'Cloth 2',
        price: 11.23,
        image: 'https://i.imgur.com/FTe6kz4.jpg'
    },
    {
        name: 'Cloth 3',
        price: 123.34,
        image: 'https://i.pinimg.com/originals/82/50/b2/8250b22c145a3c5d4120bcebc6fce18f.jpg'
    },
    {
        name: 'Cloth 4',
        price: 123.3,
        image: 'https://i.imgur.com/SGMhCzK.jpg'
    },
    {
        name: 'Cloth 5',
        price: 11.2,
        image: 'https://i.pinimg.com/originals/27/63/7f/27637f466ed68032875a7fa26d36a558.png'
    },
]

export const CLOTHES_DETAIL = [
    {
        name: 'unisex MIKENKO Tshirt',
        price: 119,
        image: 'https://salt.tikicdn.com/cache/w444/ts/product/af/1e/e8/0d86173b8ef93dbbb414214db2d47bee.jpg'
    },
    {
        name: 'Hard-mode Tshirt',
        price: 99,
        image: 'https://product.hstatic.net/200000260587/product/f5db6ac485a370fd29b2_08c843d535fa462d908973729df0aa1f_master.jpg'
    },
    {
        name: 'Funny Haikyuu Satori Tendou T-shirt',
        price: 115,
        image: 'https://ae01.alicdn.com/kf/He71ab423a2f645669b0fe118fa951381p/Funny-Haikyuu-Satori-Tendou-T-shirt-Men-Cotton-Anime-Manga-Shirts-Volleyball-Tee-Tops-Hip-Hop.jpg_Q90.jpg_.webp'
    },
    {
        name: 'ACCESS CARGO PANTS BEIGE',
        price: 69,
        image: 'https://www.lafuma.com/media/catalog/product/cache/18/image/640x/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11318-2768-pantalon-homme-access-cargo-pants-m-beige_2.jpg'
    },
]

export const ORDER_PRODUCTS = [
    {
        date: 'July 14',//ex
        products: [
            {
                name: 'unisex MIKENKO Tshirt',
                price: 119,
                image: 'https://salt.tikicdn.com/cache/w444/ts/product/af/1e/e8/0d86173b8ef93dbbb414214db2d47bee.jpg'
            },
            {
                name: 'Hard-mode Tshirt',
                price: 99,
                image: 'https://product.hstatic.net/200000260587/product/f5db6ac485a370fd29b2_08c843d535fa462d908973729df0aa1f_master.jpg'
            }
        ]
    },
    {
        date: 'July 1',
        products: [
            {
                name: 'Cloth 3',
                price: 123.34,
                image: 'https://i.pinimg.com/originals/82/50/b2/8250b22c145a3c5d4120bcebc6fce18f.jpg'
            },
            {
                name: 'Cloth 4',
                price: 123.3,
                image: 'https://i.imgur.com/SGMhCzK.jpg'
            },
            {
                name: 'Cloth 5',
                price: 11.2,
                image: 'https://i.pinimg.com/originals/27/63/7f/27637f466ed68032875a7fa26d36a558.png'
            }
        ]
    }
]
