// ===============================
// BANCO DE DADOS DOS CELULARES
// ===============================

const celulares = {

Apple:[
"iPhone 11",
"iPhone 11 Pro",
"iPhone 11 Pro Max",
"iPhone 12",
"iPhone 12 Mini",
"iPhone 12 Pro",
"iPhone 12 Pro Max",
"iPhone 13",
"iPhone 13 Mini",
"iPhone 13 Pro",
"iPhone 13 Pro Max",
"iPhone 14",
"iPhone 14 Plus",
"iPhone 14 Pro",
"iPhone 14 Pro Max",
"iPhone 15",
"iPhone 15 Plus",
"iPhone 15 Pro",
"iPhone 15 Pro Max",
"iPhone 16",
"iPhone 16 Plus",
"iPhone 16 Pro",
"iPhone 16 Pro Max"
],

Samsung:[
"Galaxy A05",
"Galaxy A05s",
"Galaxy A06",
"Galaxy A14",
"Galaxy A15",
"Galaxy A16",
"Galaxy A24",
"Galaxy A25",
"Galaxy A34",
"Galaxy A35",
"Galaxy A54",
"Galaxy A55",
"Galaxy M14",
"Galaxy M15",
"Galaxy M34",
"Galaxy M35",
"Galaxy S21",
"Galaxy S22",
"Galaxy S23",
"Galaxy S24",
"Galaxy S24+",
"Galaxy S24 Ultra",
"Galaxy S25",
"Galaxy S25+",
"Galaxy S25 Ultra"
],

Xiaomi:[
"Xiaomi 11",
"Xiaomi 12",
"Xiaomi 12 Pro",
"Xiaomi 13",
"Xiaomi 13 Pro",
"Xiaomi 14",
"Xiaomi 14 Pro",
"Xiaomi 15"
],

Redmi:[
"Redmi 12",
"Redmi 13",
"Redmi Note 10",
"Redmi Note 11",
"Redmi Note 12",
"Redmi Note 13",
"Redmi Note 13 Pro",
"Redmi Note 13 Pro+",
"Redmi Note 14",
"Redmi Note 14 Pro",
"Redmi Note 14 Pro+"
],

Poco:[
"POCO X6",
"POCO X6 Pro",
"POCO X7",
"POCO X7 Pro",
"POCO F5",
"POCO F6",
"POCO F6 Pro",
"POCO M6 Pro",
"POCO C65",
"POCO C75"
],

Motorola:[
"Moto G54",
"Moto G55",
"Moto G75",
"Moto G84",
"Moto G85",
"Moto G04",
"Moto G24",
"Moto Edge 40",
"Moto Edge 50",
"Moto Edge 50 Pro"
],

Realme:[
"Realme C53",
"Realme C55",
"Realme C61",
"Realme C63",
"Realme C65",
"Realme C67",
"Realme Note 50",
"Realme 11",
"Realme 12",
"Realme GT 6"
],

Infinix:[
"Hot 40",
"Hot 40 Pro",
"Hot 50",
"Hot 50 Pro",
"Note 30",
"Note 40",
"GT 20 Pro"
],

Tecno:[
"Spark 20",
"Spark Go",
"Pova 6",
"Camon 30"
],

Asus:[
"ROG Phone 7",
"ROG Phone 8",
"ROG Phone 9",
"Zenfone 10"
],

Google:[
"Pixel 7",
"Pixel 8",
"Pixel 8 Pro",
"Pixel 9",
"Pixel 9 Pro"
],

OnePlus:[
"OnePlus 11",
"OnePlus 12",
"OnePlus 13",
"Nord 3",
"Nord 4"
]

};

// ======================================
// LISTA GERAL PARA PESQUISA
// ======================================

const listaCelulares = [];

Object.keys(celulares).forEach(marca=>{

celulares[marca].forEach(modelo=>{

listaCelulares.push({

marca,

modelo

});

});

});
