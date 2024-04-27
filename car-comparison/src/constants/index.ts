import type { Car } from "../types";

export const CARS: Car[] = [
    {
        acceleration: '3.8',
        battery: '64',
        color: 'black',
        id: 1,
        imgs: {
            backDesktop: '/public/img/car1-back-desktop.webp',
            backMobile: '/public/img/car1-back-mobile.webp',
            car: '/public/img/car1.webp',
            carLogo: '/public/img/car1-logo.webp',
            carMobil: '/public/img/car1-mobile.webp',
        },
        maximumAutonomy: '385',
        model: 'XPOWER',
        power: '320',
        slot: 'first',
        torque: '600',
    },
    {
        acceleration: '6.5',
        battery: '77',
        color: 'white',
        id: 2,
        imgs: {
            backDesktop: '/public/img/car2-back-desktop.avif',
            backMobile: '/public/img/car2-back-mobile.webp',
            car: '/public/img/car2.webp',
            carLogo: '/public/img/car2-logo.webp',
            carMobil: '/public/img/car2-mobile.webp',
        },
        maximumAutonomy: '520',
        model: 'EXTENDED RANGE',
        power: '180',
        slot: 'second',
        torque: '350',
    },
]