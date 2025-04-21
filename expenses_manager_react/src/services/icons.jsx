import { GiTomato, GiPumpkin, GiBeet, GiPineapple, GiShinyApple, GiGrapes, Gi3dGlasses, GiFullPizza,
    GiFrenchFries, GiWatermelon, GiNestEggs, GiFlatfish, GiMedicines, GiCaduceus, GiNoodles, GiCarrot,
    GiChickenLeg, GiChickenOven, GiMilkCarton, GiSlicedBread, GiGasStove, GiCommercialAirplane,
    GiAutoRepair, GiCakeSlice, GiWrappedSweet, GiChocolateBar, GiCookie, GiPaintRoller, GiConsoleController,
    GiDrill, GiVacuumCleaner, GiPartyPopper, GiWaveSurfer, GiVideoCamera, GiStrawberry, GiSpottedMushroom,
    GiSewingMachine, GiSchoolBag, GiShorts, GiSkirt, GiTShirt, GiTankTop, GiTravelDress, GiTrousers,
    GiConverseShoe, GiRunningShoe, GiTakeMyMoney, GiMoneyStack,
} from "react-icons/gi";
import { SiNetflix, SiPrime, SiKfc  } from "react-icons/si";
import { BiCameraMovie, BiSolidTrain } from "react-icons/bi";
import { IoIosIceCream } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";
import { FaBus, FaMotorcycle, FaBicycle } from "react-icons/fa";
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
                label: 'GiSpottedMushroom', icon: <GiSpottedMushroom />, desc: 'Mushroom',
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
                label: 'GiStrawberry', icon: <GiStrawberry />, desc: 'Strawberry',
            },
            {
                label: 'GiWatermelon', icon: <GiWatermelon  />, desc: 'Water melon',
            },
            {
                label: 'GiFrenchFries ', icon: <GiFrenchFries  />, desc: 'Fries',
            },
            {
                label: 'SiKfc ', icon: <SiKfc  />, desc: 'KFC',
            },
            {
                label: 'GiFullPizza ', icon: <GiFullPizza  />, desc: 'Pizza',
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
            {
                label: 'GiCakeSlice', icon: <GiCakeSlice  />, desc: 'Cake',
            },
            {
                label: 'GiWrappedSweet', icon: <GiWrappedSweet  />, desc: 'Candy',
            },
            {
                label: 'GiChocolateBar', icon: <GiChocolateBar  />, desc: 'Chocolate',
            },
            {
                label: 'GiCookie', icon: <GiCookie  />, desc: 'Coocies',
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
            },
            {
                label: 'GiConsoleController', icon: <GiConsoleController />, desc: 'Gaming',
            },
            {
                label: 'GiPartyPopper', icon: <GiPartyPopper />, desc: 'Party',
            },
            {
                label: 'GiWaveSurfer', icon: <GiWaveSurfer />, desc: 'Beach',
            },
        ]
    },
    {
        category: 'fashion',
        icons : [
            {
                label: 'GiTShirt', icon : <GiTShirt />, desc: 'Tshirt'
            }, 
            {
                label: 'GiShorts', icon : <GiShorts />, desc: 'Shorts'
            }, 
            {
                label: 'GiTankTop', icon : <GiTankTop />, desc: 'Tank Top'
            }, 
            {
                label: 'GiTrousers', icon : <GiTrousers />, desc: 'Trouser'
            }, 
            {
                label: 'GiConverseShoe', icon : <GiConverseShoe />, desc: 'Shoe'
            }, 
            {
                label: 'GiRunningShoe', icon : <GiRunningShoe />, desc: 'Running Shoe'
            }, 

            {
                label: 'GiSchoolBag', icon : <GiSchoolBag />, desc: 'Bag'
            },
            {
                label: 'GiSkirt', icon : <GiSkirt />, desc: 'Skirt'
            },
            {
                label: 'GiTravelDress', icon : <GiTravelDress />, desc: 'Dress'
            },
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
                label: 'FaBicycle', icon : <FaBicycle />, desc: 'By-cycle'
            },
            {
                label: 'GiCommercialAirplane', icon : <GiCommercialAirplane />, desc: 'Plane'
            },
            {
                label: 'BiSolidTrain', icon : <BiSolidTrain />, desc: 'Train'
            },
            {
                label: 'BsFillFuelPumpFill', icon : <BsFillFuelPumpFill />, desc: 'Fuel'
            },
            {
                label: 'GiGasStove', icon : <GiGasStove />, desc: 'Gas'
            },
        ]
    },
    {
        category : 'services',
        icons : [
            {
                label: 'GiAutoRepair', icon : <GiAutoRepair />, desc: 'Auto Repair'
            },
            {
                label: 'GiPaintRoller', icon : <GiPaintRoller />, desc: 'Painting'
            },
            {
                label: 'GiDrill', icon : <GiDrill />, desc: 'Carpentry'
            },
            {
                label: 'GiVacuumCleaner', icon : <GiVacuumCleaner />, desc: 'Cleaning'
            },
            {
                label: 'GiVideoCamera', icon : <GiVideoCamera />, desc: 'Photos'
            },
            {
                label: 'GiSewingMachine', icon : <GiSewingMachine />, desc: 'Tailoring'
            },
        ]
    }
]

export const bankingIcons = [
    {
        label: 'GiTakeMyMoney', icon : <GiTakeMyMoney />, desc: 'Cash'
    },
    {
        label: 'GiMoneyStack', icon : <GiMoneyStack />, desc: 'Money Stack'
    },
    {
        label: 'GiTakeMyMoney', icon : <GiTakeMyMoney />, desc: 'Cash'
    },
    {
        label: 'GiTakeMyMoney', icon : <GiTakeMyMoney />, desc: 'Cash'
    },
]

export default icons;
