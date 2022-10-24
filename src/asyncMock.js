import { doc, addDoc, collection } from "firebase/firestore"
import { db } from "./services/firebase"

const products = [
    {
        id: "1",
        name: "Athlon 3000G",
        description: "2 núcleos y 3.5GHz de frecuencia con gráfica integrada.",
        price: 19000,
        stock: 3,
        category: "cpu",
        subcategory: "c_amd",
        keywords: "athlon 3000g amd",
        img: "/images/CPUs/AMD/Athlon 3000G YD3000C6FHBOX_1.webp",
        img2: "/images/CPUs/AMD/Athlon 3000G YD3000C6FHBOX_2.webp",
        info: "Ideal para navegar por Internet con rapidez, transmitir videos en tiempo real sin un solo corte y jugar a los juegos más populares en alta definición de 720p.--Memoria caché de 4 MB, rápida y volátil.--Procesador gráfico Radeon Vega 3 Graphics.--Su potencia es de 35 W.--Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.--Producto en empaque original.--Procesador innovador desarrollado bajo altos estándares de calidad."
    },
    {
        id: "2",
        name: "Ryzen 5 5600G",
        description: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada.",
        price: 40000,
        stock: 5,
        category: "cpu",
        subcategory: "c_amd",
        keywords: "ryzen 5 5600g amd",
        img: "/images/CPUs/AMD/Ryzen 5 5600G 100000252BOX_1.webp",
        img2: "/images/CPUs/AMD/Ryzen 5 5600G 100000252BOX_2.webp",
        info: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.--Memoria caché de 16 MB, rápida y volátil.--Procesador gráfico Radeon Graphics.--Soporta memoria RAM DDR4.--Su potencia es de 65 W.--Cuenta con 12 hilos que favorecen la ejecución de múltiples programas a la vez.--Producto en empaque original.--Procesador innovador desarrollado bajo altos estándares de calidad."
    },
    {
        id: "3",
        name: "Ryzen 7 5700G",
        description: "8 núcleos y 4.6GHz de frecuencia con gráfica integrada.",
        price: 83000,
        stock: 4,
        category: "cpu",
        subcategory: "c_amd",
        keywords: "ryzen 7 5700g amd",
        img: "/images/CPUs/AMD/Ryzen 7 5700G 100000263BOX_1.webp",
        img2: "/images/CPUs/AMD/Ryzen 7 5700G 100000263BOX_2.webp",
        info: "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.--Memoria caché de 16 MB, rápida y volátil.--Procesador gráfico Radeon Graphics.--Soporta memoria RAM DDR4.--Su potencia es de 65 W.--Cuenta con 16 hilos que favorecen la ejecución de múltiples programas a la vez.--Producto en empaque original.--Procesador innovador desarrollado bajo altos estándares de calidad."
    },
    {
        id: "4",
        name: "Core i3 10100",
        description: " 4 núcleos y 4.3GHz de frecuencia con gráfica integrada.",
        price: 20000,
        stock: 6,
        category: "cpu",
        subcategory: "c_intel",
        keywords: "core i3 10100 intel",
        img: "/images/CPUs/Intel/Core i3 10100 BX8070110100_1.webp",
        img2: "/images/CPUs/Intel/Core i3 10100 BX8070110100_2.webp",
        info: "Producto eficiente y de rendimiento estándar en programas de edición de video, contenido y juegos.--Memoria caché de 6 MB, rápida y volátil.--Procesador gráfico Intel UHD Graphics 630.--Soporta memoria RAM DDR4.--Su potencia es de 65 W.--Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos.--Producto en empaque original.--Procesador avanzado de alto desempeño y marca líder en el rubro."
    },
    {
        id: "5",
        name: "Core i5 6500",
        description: "4 núcleos y 3.6GHz de frecuencia con gráfica integrada",
        price: 28000,
        stock: 8,
        category: "cpu",
        subcategory: "c_intel",
        keywords: "core i5 6500 intel",
        img: "/images/CPUs/Intel/Core i5 6500 CM8066201920404_1.webp",
        img2: "/images/CPUs/Intel/Core i5 6500 CM8066201920404_2.webp",
        info: "Ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento del dispositivo.--Memoria caché de 6 MB, rápida y volátil.--Procesador gráfico Intel HD Graphics 530.--Soporta memoria RAM DDR3L, DDR4.--Su potencia es de 35 W.--Cuenta con 4 hilos que favorecen la ejecución de múltiples programas a la vez.--Procesador avanzado de alto desempeño y marca líder en el rubro."
    },
    {
        id: "6",
        name: "Core i7 10700F",
        description: "8 núcleos y 4.8GHz de frecuencia",
        price: 67000,
        stock: 7,
        category: "cpu",
        subcategory: "c_intel",
        keywords: "core i7 10700F intel",
        img: "/images/CPUs/Intel/Core i7 10700F BX8070110700F_1.webp",
        img2: "/images/CPUs/Intel/Core i7 10700F BX8070110700F_2.webp",
        info: "Producto de alto rendimiento y línea exclusiva para profesionales que ejecutan muchos programas a la vez.--Memoria caché de 16 MB, rápida y volátil.--Soporta memoria RAM DDR4.--Su potencia es de 65 W.--Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos.--Producto en empaque original.--Procesador avanzado de alto desempeño y marca líder en el rubro."
    },
    {
        id: "7",
        name: "Seagate Barracuda 1TB",
        description: "Disco Rígido Seagate ST1000DM010",
        price: 8200,
        stock: 3,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "seagate barracuda 1tb",
        img: "/images/Discos/HDD/Seagate/Seagate Barracuda ST1000DM010 1TB_1.webp",
        img2: "/images/Discos/HDD/Seagate/Seagate Barracuda ST1000DM010 1TB_2.webp",
        info: ""
    },
    {
        id: "8",
        name: "Seagate Barracuda 2TB",
        description: "Disco Rígido Seagate ST2000DM008",
        price: 12000,
        stock: 8,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "seagate barracuda 2tb",
        img: "/images/Discos/HDD/Seagate/Seagate Barracuda ST2000DM008 2TB plata_1.webp",
        img2: "/images/Discos/HDD/Seagate/Seagate Barracuda ST2000DM008 2TB plata_2.webp",
        info: ""
    },
    {
        id: "9",
        name: "Toshiba Series 500GB",
        description: "Toshiba MQ01ABD Series",
        price: 8450,
        stock: 2,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "toshiba series 500gb",
        img: "/images/Discos/HDD/Toshiba/Toshiba MQ01ABD Series MQ01ABD050 500GB_1.webp",
        img2: "/images/Discos/HDD/Toshiba/Toshiba MQ01ABD Series MQ01ABD050 500GB_2.webp",
        info: ""
    },
    {
        id: "10",
        name: "WD Purple 2TB",
        description: "Western Digital Purple WD20PURX",
        price: 12000,
        stock: 5,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "wd purple 2tb western digital",
        img: "/images/Discos/HDD/WD/Western Digital WD Purple WD20PURX 2TB purpura_1.webp",
        img2: "/images/Discos/HDD/WD/Western Digital WD Purple WD20PURX 2TB purpura_2.webp",
        info: ""
    },
    {
        id: "11",
        name: "WD Blue 2TB",
        description: "Western Digital Blue WD20EZRZ 2TB",
        price: 13000,
        stock: 16,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "wd Blue 2tb western digital",
        img: "/images/Discos/HDD/WD/Western Digital WD20EZRZ 2TB_1.webp",
        img2: "/images/Discos/HDD/WD/Western Digital WD20EZRZ 2TB_2.webp",
        info: ""
    },
    {
        id: "12",
        name: "WD Blue 1TB",
        description: "Western Digital Blue WD10EZEX 1TB",
        price: 8500,
        stock: 25,
        category: "discos",
        subcategory: "d_hdd",
        keywords: "wd blue 1tb western digital",
        img: "/images/Discos/HDD/WD/Western Digital WD10EZEX  1TB Caviar_1.webp",
        img2: "/images/Discos/HDD/WD/Western Digital WD10EZEX  1TB Caviar_2.webp",
        info: ""
    },
    {
        id: "13",
        name: "Gigabyte 240Gb",
        description: "Gigabyte GP-GSTFS31240GNTD 240GB",
        price: 5000,
        stock: 14,
        category: "discos",
        subcategory: "d_ssd",
        keywords: "gigabyte 240gb",
        img: "/images/Discos/SSD/Gigabyte/Gigabyte GP-GSTFS31240GNTD 240GB_1.webp",
        img2: "/images/Discos/SSD/Gigabyte/Gigabyte GP-GSTFS31240GNTD 240GB_2.webp",
        info: ""
    },
    {
        id: "14",
        name: "Kingston 480G ",
        description: "Kingston SA400S37 480GB",
        price: 8300,
        stock: 20,
        category: "discos",
        subcategory: "d_ssd",
        keywords: "kingston 480g ",
        img: "/images/Discos/SSD/Kingston/Kingston SA400S37 480G 480GB_1.webp",
        img2: "/images/Discos/SSD/Kingston/Kingston SA400S37 480G 480GB_2.webp",
        info: ""
    },
    {
        id: "15",
        name: "Samsung 870 EVO500GB",
        description: "Samsung 870 EVO MZ-77E500 500GB negro",
        price: 20000,
        stock: 4,
        category: "discos",
        subcategory: "d_ssd",
        keywords: "samsung 870 evo500gb",
        img: "/images/Discos/SSD/Samsung/Samsung 870 EVO MZ-77E500 500GB negro_1.webp",
        img2: "/images/Discos/SSD/Samsung/Samsung 870 EVO MZ-77E500 500GB negro_2.webp",
        info: ""
    },
    {
        id: "16",
        name: "Corsair Vengance 16GB",
        description: "Corsair Vengeance LPX gamer 16GB 2  color negro CMK16GX4M2B3200C16",
        price: 25000,
        stock: 5,
        category: "memorias",
        subcategory: "m_corsair",
        keywords: "corsair vengance 16gb",
        img: "/images/Memorias/Corsair/Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16_1.webp",
        img2: "/images/Memorias/Corsair/Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16_2.webp",
        info: ""
    },
    {
        id: "17",
        name: "Corsair Select 8GB",
        description: "Corsair Value Select 8GB color verde CMSO8GX3M1C1600C11",
        price: 12000,
        stock: 2,
        category: "memorias",
        subcategory: "m_corsair",
        keywords: "corsair select 8gb",
        img: "/images/Memorias/Corsair/Value Select color verde 8GB 1 Corsair CMSO8GX3M1C1600C11_1.webp",
        img2: "/images/Memorias/Corsair/Value Select color verde 8GB 1 Corsair CMSO8GX3M1C1600C11_2.webp",
        info: ""
    },
    {
        id: "18",
        name: "Corsair Vengeance RGB Pro gamer 16GB",
        description: "Corsair Vengeance RGB Pro gamer color negro 16GB CMW16GX4M2D3600C18",
        price: 15000,
        stock: 8,
        category: "memorias",
        subcategory: "m_corsair",
        keywords: "corsair vengeance rgb pro gamer 16gb",
        img: "/images/Memorias/Corsair/Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2D3600C18_1.webp",
        img2: "/images/Memorias/Corsair/Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2D3600C18_2.webp",
        info: ""
    },
    {
        id: "19",
        name: "G.skill Trident Z Royal 16GB Ddr4",
        description: "G.skill Trident Z Royal Ddr4 3600mhz RGB",
        price: 24000,
        stock: 2,
        category: "memorias",
        subcategory: "m_gskill",
        keywords: "g.skill trident z royal 16gb ddr4",
        img: "/images/Memorias/Gskill/Gskill Trident Z Royal Ddr4 3600mhz Rgb_1.webp",
        img2: "/images/Memorias/Gskill/Gskill Trident Z Royal Ddr4 3600mhz Rgb_2.webp",
        info: ""
    },
    {
        id: "20",
        name: "G.Skill Trident Z 16GB",
        description: "G.Skill Trident Z RGB gamer color negro 16GB F4-3600C18D-16GTZR",
        price: 24000,
        stock: 6,
        category: "memorias",
        subcategory: "m_gskill",
        keywords: "g.skill trident z 16gb",
        img: "/images/Memorias/Gskill/G.Skill Trident Z RGB gamer color negro 16GB 2_1.webp",
        img2: "/images/Memorias/Gskill/G.Skill Trident Z RGB gamer color negro 16GB 2_2.webp",
        info: ""
    },
    {
        id: "21",
        name: "Kingston Fury Beast 8GB",
        description: "Kingston Fury Beast DDR4 gamer color negro 8GB KF432C16BB",
        price: 9500,
        stock: 10,
        category: "memorias",
        subcategory: "m_kingston",
        keywords: "kingston fury beast 8gb",
        img: "/images/Memorias/Kingston/Kingston  Fury Beast DDR4 gamer color negro 8GB_1.webp",
        img2: "/images/Memorias/Kingston/Kingston  Fury Beast DDR4 gamer color negro 8GB_2.webp",
        info: ""
    },
    {
        id: "22",
        name: "Kingston ValueRAM 8GB",
        description: "Kingston ValueRAM color verde 8GB  KVR16N11/8WP",
        price: 12900,
        stock: 4,
        category: "memorias",
        subcategory: "m_kingston",
        keywords: "kingston valueram 8gb",
        img: "/images/Memorias/Kingston/Kingston KVR16N11 8WP_1.webp",
        img2: "/images/Memorias/Kingston/Kingston KVR16N11 8WP_2.webp",
        info: ""
    },
    {
        id: "23",
        name: "Kingston ValueRAM 8GB",
        description: "Kingston ValueRAM color verde 8GB KVR32S22S8",
        price: 9000,
        stock: 4,
        category: "memorias",
        subcategory: "m_kingston",
        keywords: "kingston valueram 8gb",
        img: "/images/Memorias/Kingston/Kingston ValueRAM color verde 8GB_1.webp",
        img2: "/images/Memorias/Kingston/Kingston ValueRAM color verde 8GB_2.webp",
        info: ""
    },
    {
        id: "24",
        name: "Kingston ValueRAM 8GB",
        description: "ValueRAM color verde 16GB 1 Kingston KVR26S19D8 16",
        price: 13500,
        stock: 4,
        category: "memorias",
        subcategory: "m_kingston",
        keywords: "kingston valueram 8gb",
        img: "/images/Memorias/Kingston/ValueRAM color verde 16GB 1 Kingston KVR26S19D8 16_1.webp",
        img2: "/images/Memorias/Kingston/ValueRAM color verde 16GB 1 Kingston KVR26S19D8 16_2.webp",
        info: ""
    },
    {
        id: "25",
        name: "Asrock B450",
        description: "Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer ",
        price: 30000,
        stock: 5,
        category: "motherboards",
        subcategory: "mb_asrock",
        keywords: "asrock b450",
        img: "/images/Motherboards/Asrock/Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer_1.webp",
        img2: "/images/Motherboards/Asrock/Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer_2.webp",
        info: ""
    },
    {
        id: "26",
        name: "Asrock Z390 Phantom Gaming",
        description: "Asrock Z390 Phantom Gaming Lga 1151 M2",
        price: 23000,
        stock: 7,
        category: "motherboards",
        subcategory: "mb_asrock",
        keywords: "asrock z390 phantom gaming",
        img: "/images/Motherboards/Asrock/Asrock Z390 Phantom Gaming Lga 1151 M2 Oem Pcreg_1.webp",
        img2: "/images/Motherboards/Asrock/Asrock Z390 Phantom Gaming Lga 1151 M2 Oem Pcreg_2.webp",
        info: ""
    },
    {
        id: "27",
        name: "Asus A520m-k",
        description: "Asus A520m-k Am4 Ryzen 3ra Gen Hdmi M.2 1",
        price: 14670,
        stock: 3,
        category: "motherboards",
        subcategory: "mb_asus",
        keywords: "asus a520m-k",
        img: "/images/Motherboards/Asus/Asus A520m-k Am4 Ryzen 3ra Gen Hdmi M.2_1.webp",
        img2: "/images/Motherboards/Asus/Asus A520m-k Am4 Ryzen 3ra Gen Hdmi M.2_2.webp",
        info: ""
    },
    {
        id: "28",
        name: "Asus Prime A320m-k",
        description: "Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320",
        price: 12900,
        stock: 3,
        category: "motherboards",
        subcategory: "mb_asus",
        keywords: "asus prime a320m-k",
        img: "/images/Motherboards/Asus/Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320_1.webp",
        img2: "/images/Motherboards/Asus/Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320_2.webp",
        info: ""
    },
    {
        id: "29",
        name: "Asus Rog Strix B550-f",
        description: "Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen",
        price: 73000,
        stock: 2,
        category: "motherboards",
        subcategory: "mb_asus",
        keywords: "asus rog strix b550-f",
        img: "/images/Motherboards/Asus/Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen_1.webp",
        img2: "/images/Motherboards/Asus/Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen_2.webp",
        info: ""
    },
    {
        id: "30",
        name: "Asus Tuf Gaming X570 Plus",
        description: "Asus Tuf Gaming X570 Plus Wifi Am4 Ryzen Ddr4",
        price: 53000,
        stock: 1,
        category: "motherboards",
        subcategory: "mb_asus",
        keywords: "asus tuf gaming x570 plus",
        img: "/images/Motherboards/Asus/Asus Tuf Gaming X570 Plus Wifi Am4 Ryzen Ddr4_1.webp",
        img2: "/images/Motherboards/Asus/Asus Tuf Gaming X570 Plus Wifi Am4 Ryzen Ddr4_2.webp",
        info: ""
    },
    {
        id: "31",
        name: "Gigabyte B550-UD DS3H",
        description: "Gigabyte B550-UD DS3H 1.0 Am4 Amd Ryzen",
        price: 26000,
        stock: 2,
        category: "motherboards",
        subcategory: "mb_gigabyte",
        keywords: "gigabyte b550-ud ds3h",
        img: "/images/Motherboards/Gigabyte/Gigabyte B550 Ud Ds3h 1.0 Am4 Amd Ryzen_1.webp",
        img2: "/images/Motherboards/Gigabyte/Gigabyte B550 Ud Ds3h 1.0 Am4 Amd Ryzen_2.webp",
        info: ""
    },
    {
        id: "32",
        name: "Gigabyte H310m",
        description: "Gigabyte H310m M.2 2.0 Ddr4 9na Gen Socket 1151",
        price: 12990,
        stock: 6,
        category: "motherboards",
        subcategory: "mb_gigabyte",
        keywords: "gigabyte h310m",
        img: "/images/Motherboards/Gigabyte/Gigabyte H310m M.2 2.0 Ddr4 9na Gen Socket 1151_1.webp",
        img2: "/images/Motherboards/Gigabyte/Gigabyte H310m M.2 2.0 Ddr4 9na Gen Socket 1151_2.webp",
        info: ""
    },
    {
        id: "33",
        name: "Gigabyte Z690",
        description: "Gigabyte Z690 Ud Ax Ddr5 Socket 1700",
        price: 57890,
        stock: 2,
        category: "motherboards",
        subcategory: "mb_gigabyte",
        keywords: "gigabyte z690",
        img: "/images/Motherboards/Gigabyte/Gigabyte Z690 Ud Ax Ddr5 Socket 1700_1.webp",
        img2: "/images/Motherboards/Gigabyte/Gigabyte Z690 Ud Ax Ddr5 Socket 1700_2.webp",
        info: ""
    },
    {
        id: "34",
        name: "Msi A320m-a Pro Max",
        description: "Msi A320m-a Pro Max Amd Am4 Ryzen",
        price: 13000,
        stock: 4,
        category: "motherboards",
        subcategory: "mb_msi",
        keywords: "msi a320m-a pro max",
        img: "/images/Motherboards/MSI/Msi A320m-a Pro Max Amd Am4 Ryzen_1.webp",
        img2: "/images/Motherboards/MSI/Msi A320m-a Pro Max Amd Am4 Ryzen_2.webp",
        info: ""
    },
    {
        id: "35",
        name: "Msi B450 Gaming Plus Max",
        description: "Msi B450 Gaming Plus Max para minería",
        price: 30000,
        stock: 1,
        category: "motherboards",
        subcategory: "mb_msi",
        keywords: "msi b450 gaming plus max",
        img: "/images/Motherboards/MSI/Msi B450 Gaming Plus Max_1.webp",
        img2: "/images/Motherboards/MSI/Msi B450 Gaming Plus Max_2.webp",
        info: ""
    },
    {
        id: "36",
        name: "Msi Z590 Gaming Carbon",
        description: "Msi Z590 Gaming Carbon Wifi S1200 Ddr4 11va Gen",
        price: 56000,
        stock: 3,
        category: "motherboards",
        subcategory: "mb_msi",
        keywords: "msi z590 gaming carbon",
        img: "/images/Motherboards/MSI/Msi Z590 Gaming Carbon Wifi S1200 Ddr4 11va Gen_1.webp",
        img2: "/images/Motherboards/MSI/Msi Z590 Gaming Carbon Wifi S1200 Ddr4 11va Gen_2.webp",
        info: ""
    },
    {
        id: "37",
        name: "Asus TUF Gaming RX 6700",
        description: "Asus TUF Gaming Radeon RX 6700 Series TUF OC Edition 12GB",
        price: 157000,
        stock: 1,
        category: "video",
        subcategory: "v_asus",
        keywords: "asus tuf gaming rx 6700",
        img: "/images/VideoCards/AMD/Asus TUF Gaming Radeon RX 6700 Series TUF OC Edition 12GB_1.webp",
        img2: "/images/VideoCards/AMD/Asus TUF Gaming Radeon RX 6700 Series TUF OC Edition 12GB_2.webp",
        info: ""
    },
    {
        id: "38",
        name: "Radeon RX 6700",
        description: "PowerColor Red Devil Radeon RX 6700 Series 12GBD6 3DHEOC 12GB 1",
        price: 130900,
        stock: 2,
        category: "video",
        subcategory: "v_asus",
        keywords: "radeon rx 6700",
        img: "/images/VideoCards/AMD/PowerColor Red Devil Radeon RX 6700 Series 12GBD6 3DHEOC 12GB_1.webp",
        img2: "/images/VideoCards/AMD/PowerColor Red Devil Radeon RX 6700 Series 12GBD6 3DHEOC 12GB_2.webp",
        info: ""
    },
    {
        id: "39",
        name: "Sapphire Nitro+ Radeon RX 6600",
        description: "Sapphire Nitro+ Radeon RX 6600 Series RX 6600 XT 11309-01-20G 8GB",
        price: 110000,
        stock: 2,
        category: "video",
        subcategory: "v_sapphire",
        keywords: "sapphire nitro+ radeon rx 6600",
        img: "/images/VideoCards/AMD/Sapphire Nitro+ Radeon RX 6600 Series RX 6600 XT 11309-01-20G 8GB_1.webp",
        img2: "/images/VideoCards/AMD/Sapphire Nitro+ Radeon RX 6600 Series RX 6600 XT 11309-01-20G 8GB_2.webp",
        info: ""
    },
    {
        id: "40",
        name: "Evga GeForce RTX 3080 Ti",
        description: "Evga FTW3 Ultra Gaming RTX 3080 Ti 12GB",
        price: 193000,
        stock: 1,
        category: "video",
        subcategory: "v_evga",
        keywords: "evga geForce rtx 3080 ti",
        img: "/images/VideoCards/Nvidia/Evga FTW3 Ultra Gaming RTX 3080 Ti 12GB_1.webp",
        img2: "/images/VideoCards/Nvidia/Evga FTW3 Ultra Gaming RTX 3080 Ti 12GB_2.webp",
        info: ""
    },
    {
        id: "41",
        name: "Gigabyte GeForce GTX 1660 SUPER",
        description: "Gigabyte GeForce GTX 1660 SUPER GV-N166SOC-6GD OC Edition 6GB",
        price: 157800,
        stock: 2,
        category: "video",
        keywords: "gigabyte geForce gtx 1660 super",
        subcategory: "v_gigabyte",
        img: "/images/VideoCards/Nvidia/Gigabyte GeForce GTX 1660 SUPEROC Edition 6GB_1.webp",
        img2: "/images/VideoCards/Nvidia/Gigabyte GeForce GTX 1660 SUPEROC Edition 6GB_2.webp",
        info: ""
    },
    {
        id: "42",
        name: "MSI Ventus XS GTX 1660 OC Edition",
        description: "MSI Ventus XS GTX 1660 OC Edition 6GB",
        price: 85000,
        stock: 1,
        category: "video",
        keywords: "msi ventus xs gtx 1660 oc edition",
        subcategory: "v_msi",
        img: "/images/VideoCards/Nvidia/Nvidia MSI Ventus XS GeForce GTX 1660 OC Edition 6GB_1.webp",
        img2: "/images/VideoCards/Nvidia/Nvidia MSI Ventus XS GeForce GTX 1660 OC Edition 6GB_2.webp",
        info: ""
    },
    {
        id: "43",
        name: "Zotac Gaming RTX 3090",
        description: "Zotac Gaming GeForce RTX 3090 ZT-A30900D-10P 24GB",
        price: 305000,
        stock: 1,
        category: "video",
        keywords: "zotac gaming rtx 3090",
        subcategory: "v_zotac",
        img: "/images/VideoCards/Nvidia/Zotac Gaming GeForce RTX 3090  24GB_1.webp",
        img2: "/images/VideoCards/Nvidia/Zotac Gaming GeForce RTX 3090  24GB_2.webp",
        info: ""
    },

]


/* products.forEach(async prod => {
await addDoc(collection(db, "products"))
 addDoc(prod)
})
 */
/* Devuelve lista completa de productos */

export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products)

        }, 1500)

    })
}

/* Devuelve producto por id */

export const getProductbyId = (productId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.find(prod => prod.id === productId))

        }, 1000)

    })
}

/* Devuelve lista de productos filtrada por categoría */

export const filterProductByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category === categoryId))

        }, 1000)

    })

}

/* Devuelve lista de productos filtrada por subcategoría */

export const filterProductBySubCategory = (subCategoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.subcategory === subCategoryId))

        }, 1000)

    })

}

/* Devuelve lista de productos dependiendo de lo ingresado en el buscador */

export const filterProductByInputSearch = (imputSearchId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.keywords.includes(imputSearchId.toLowerCase())))
        }, 500)

    })

}