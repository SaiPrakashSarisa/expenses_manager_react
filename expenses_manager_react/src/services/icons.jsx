import { GiTomato, GiPumpkin, GiBeet, GiPineapple, GiShinyApple, GiGrapes, Gi3dGlasses, GiFullPizza,
    GiFrenchFries, GiWatermelon, GiNestEggs, GiFlatfish, GiMedicines, GiCaduceus, GiNoodles, GiCarrot,
    GiChickenLeg, GiChickenOven, GiMilkCarton, GiSlicedBread, GiGasStove
} from "react-icons/gi";
import { SiNetflix, SiPrime, SiKfc  } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { IoIosIceCream } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";
import { FaBus, FaMotorcycle } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";


const icons = [
    {
        category: 'food',
        icons : [
            {
                label: 'GiTomato', icon : <GiTomato />, desc: 'Tomatos'
            }, 
            {
                label: 'GiPumpkin', icon : <GiPumpkin />, desc: 'Pumpkin'
            }, 
            {
                label: 'GiBeet', icon: <GiBeet />, desc: 'Beetroot',
            },
            {
                label: 'GiCarrot', icon: <GiCarrot />, desc: 'carrot',
            },
            {
                label: 'GiPineapple', icon: <GiPineapple />, desc: 'pine-apple',
            },
            {
                label: 'GiShinyApple', icon: <GiShinyApple />, desc: 'Apple',
            },
            {
                label: 'GiGrapes', icon: <GiGrapes />, desc: 'Grapes',
            },
            {
                label: 'GiFullPizza ', icon: <GiFullPizza  />, desc: 'Pizza',
            },
            {
                label: 'GiFrenchFries ', icon: <GiFrenchFries  />, desc: 'Fries',
            },
            {
                label: 'SiKfc ', icon: <SiKfc  />, desc: 'KFC',
            },
            {
                label: 'GiWatermelon', icon: <GiWatermelon  />, desc: 'Water melon',
            },
            {
                label: 'GiNestEggs', icon: <GiNestEggs  />, desc: 'Eggs',
            },
            {
                label: 'GiFlatfish', icon: <GiFlatfish  />, desc: 'Fish',
            },
            {
                label: 'GiChickenLeg', icon: <GiChickenLeg  />, desc: 'Chicken',
            },
            {
                label: 'GiChickenOven', icon: <GiChickenOven  />, desc: 'Biriyani',
            },
            {
                label: 'IoIosIceCream', icon: <IoIosIceCream  />, desc: 'Ice Cream',
            },
            {
                label: 'GiNoodles', icon: <GiNoodles  />, desc: 'Noodles',
            },
            {
                label: 'GiMilkCarton', icon: <GiMilkCarton  />, desc: 'Milk',
            },
            {
                label: 'GiSlicedBread', icon: <GiSlicedBread  />, desc: 'Bread',
            },
            
        ]
    },
    {
        category: 'entertainment',
        icons : [
            {
                label: 'SiNetflix', icon : <SiNetflix />, desc: 'Netflix'
            }, 
            {
                label: 'SiPrime', icon : <SiPrime />, desc: 'Amazon Prime'
            }, 
            {
                label: 'BiCameraMovie', icon: <BiCameraMovie />, desc: 'Movie',
            },
            {
                label: 'Gi3dGlasses', icon: <Gi3dGlasses />, desc: '3D Movie',
            }
        ]
    },
    {
        category: 'medical',
        icons : [
            {
                label: 'GiCaduceus', icon : <GiCaduceus />, desc: 'Hospital'
            }, 
            {
                label: 'GiMedicines', icon : <GiMedicines />, desc: 'Medicines'
            },
        ]
    },
    {
        category: 'Transportation',
        icons : [
            {
                label: 'IoCarSportOutline', icon : <IoCarSportOutline />, desc: 'Car'
            }, 
            {
                label: 'FaBus', icon : <FaBus />, desc: 'Bus'
            },
            {
                label: 'FaMotorcycle', icon : <FaMotorcycle />, desc: 'Bike'
            },
            {
                label: 'BsFillFuelPumpFill', icon : <BsFillFuelPumpFill />, desc: 'Fuel'
            },
            {
                label: 'GiGasStove', icon : <GiGasStove />, desc: 'Gas'
            },
        ]
    }
]

export default icons;