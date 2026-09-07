// ==================== CONFIG & DATA ====================
const CAFE_WHATSAPP_NUMBER = "923281200021";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwa_x9p4Djb82JGolJn1aHfhRHLhY9wyjaiaqTyBMprNpFhWF_yYiuzvMpLDtdqXUUqoA/exec";

const navLinks = [
    { label: "Home", href: "index.html" },
    { label: "Deals", href: "#deals" },
    { label: "Zainab Special", href: "#zainab-special" },
    { label: "Karahi & Handi", href: "#karahi-handi" },
    { label: "BBQ & Platters", href: "#bbq" },
    { label: "Pizzas", href: "#pizzas" },
    { label: "Burgers & Fast Food", href: "#burgers" },
    { label: "Pastas & Steaks", href: "#pastas-steaks" },
    { label: "Soups & Starters", href: "#soups-starters" },
    { label: "Rice & Tandoor", href: "#rice-tandoor" },
    { label: "Salads & Raita", href: "#salads" },
    { label: "Desserts & Ice Cream", href: "#desserts" },
    { label: "Bar Drinks & Tea", href: "#bar-drinks" }
];

const specialDeals = [
    { id: "dl_sp", title: "Z Special Deal", details: "1-Z. Special Pizza (L), 1-Hot Wings (8 Pcs), 1-Cold Drink (1.5 Ltr)", price: 2450, img: "images/1.1.jpg" },
    { id: "dl1", title: "Deal 1", details: "2-Zinger Burgers, 8-Hot Wings, 1-Cold Drink (1 Ltr)", price: 1600, img: "images/1.2.jpg" },
    { id: "dl2", title: "Deal 2", details: "2-Zinger Burgers, 2-Shawarma, 1-Cold Drink (1 Ltr)", price: 1450, img: "images/1.3.jpg" },
    { id: "dl3", title: "Deal 3", details: "1-Tikka Pizza (M), 1-Loaded Fries, 1-Cold Drink (1 Ltr)", price: 1450, img: "images/1.4.jpg" },
    { id: "dl4", title: "Deal 4", details: "1-Tikka Pizza (M), 1-Creamy Pasta, 1-Cold Drink (1 Ltr)", price: 1850, img: "images/1.5.jpg" },
    { id: "dl5", title: "Deal 5", details: "1-Bar BQ Pizza (L), 1-Fajita Pizza (S), 1-Cold Drink (1.5 Ltr)", price: 2250, img: "images/1.6.jpg" },
    { id: "dl6", title: "Deal 6", details: "1-Tikka Pizza (L), 2-Zinger Burgers, 2-Petty Burgers, 1-Cold Drink (1.5 Ltr)", price: 3250, img: "images/1.7.jpg" },
    { id: "dl7", title: "Deal 7", details: "1-Tikka Pizza (F), 1-Pizza Fries Pasta, 1-Z.Special Wrap, 1-Plain Fries (L), 1-Cold Drink (1.5 Ltr)", price: 3500, img: "images/1.8.jpg" },
    { id: "dl8", title: "Deal 8 (Family Deal)", details: "1-Tikka Pizza (F), 1-Fajita Pizza (F), 1-Crunchy Pasta, 1-Loaded Fries, 2-Cold Drink (1.5 Ltr)", price: 5400, img: "images/1.9.jpg" }
];

const zainabSpecialList = [
    { id: "zs1", type: "halfFull", name: "Mutton Mandi", half: 2850, full: 3999, img: "images/1.10.jpg" },
    { id: "zs2", type: "standard", name: "Mutton Mutka", price: 4499, img: "images/1.11.jpg" },
    { id: "zs3", type: "halfFull", name: "Mutton Dou Payaza", half: 2300, full: 4500, img: "images/1.12.jpg" },
    { id: "zs4", type: "standard", name: "Mutton Qeema", price: 2199, img: "images/1.13.jpg" },
    { id: "zs5", type: "halfFull", name: "Chicken Mandi", half: 1550, full: 2599, img: "images/1.14.jpg" },
    { id: "zs6", type: "halfFull", name: "Desi Murg", half: 1799, full: 3399, img: "images/1.15.jpg" },
    { id: "zs7", type: "halfFull", name: "Grill Fish (Chinja)", half: 1599, full: 2999, img: "images/1.16.jpg" },
    { id: "zs8", type: "halfFull", name: "Finger Fish", half: 1999, full: 3999, img: "images/1.17.jpg" },
    { id: "zs9", type: "halfFull", name: "Fried Fish", half: 1999, full: 3999, img: "images/1.18.jpg" },
    { id: "zs10", type: "standard", name: "Khada Kabab (Full Bakra With Rice)", price: 41999, img: "images/1.19.jpg" },
    { id: "zs11", type: "standard", name: "Irani Chargah with Rice", price: 2400, img: "images/2.1.jpg" },
    { id: "zs12", type: "standard", name: "Malai Chargah with Rice", price: 2500, img: "images/2.2.jpg" }
];

const karahiAndHandiList = [
    // Mutton
    { id: "kh1", type: "halfFull", name: "Mutton Shinwari", half: 2200, full: 4400, img: "images/1.20.jpg" },
    { id: "kh2", type: "halfFull", name: "Mutton Shimla", half: 2200, full: 4400, img: "images/1.21.jpg" },
    { id: "kh3", type: "halfFull", name: "Mutton Sulemani", half: 2200, full: 4400, img: "images/1.22.jpg" },
    { id: "kh4", type: "standard", name: "Dum Pukht", price: 4400, img: "images/1.23.jpg" },
    { id: "kh5", type: "halfFull", name: "Z Special Mutton Zaitoon Karahi", half: 2400, full: 4700, img: "images/1.24.jpg" },
    { id: "kh6", type: "halfFull", name: "Mutton Karahi (Black Pepper)", half: 2200, full: 4400, img: "images/1.25.jpg" },
    { id: "kh7", type: "halfFull", name: "Mutton Karahi (Red)", half: 2200, full: 4400, img: "images/1.26.jpg" },
    { id: "kh8", type: "halfFull", name: "Mutton Karahi (White)", half: 2300, full: 4500, img: "images/1.27.jpg" },
    { id: "kh9", type: "standard", name: "Mutton Palak", price: 2400, img: "images/1.28.jpg" },

    // Chicken Karahi
    { id: "kh10", type: "halfFull", name: "Z Special Chicken Karahi", half: 1200, full: 2200, img: "images/1.29.jpg" },
    { id: "kh11", type: "halfFull", name: "Chicken Shinwari Karahi", half: 1200, full: 2200, img: "images/1.30.jpg" },
    { id: "kh12", type: "halfFull", name: "Chicken Karahi (Red)", half: 1100, full: 2000, img: "images/1.31.jpg" },
    { id: "kh13", type: "halfFull", name: "Chicken Karahi (White)", half: 1200, full: 2200, img: "images/1.32.jpg" },
    { id: "kh14", type: "halfFull", name: "Chicken Karahi (Black Pepper)", half: 1100, full: 2000, img: "images/1.33.jpg" },
    { id: "kh15", type: "halfFull", name: "Chicken Hyderabadi Karahi", half: 1100, full: 2000, img: "images/1.34.jpg" },
    { id: "kh16", type: "halfFull", name: "Chicken Rajasthani Karahi", half: 1200, full: 2200, img: "images/1.35.jpg" },
    { id: "kh17", type: "halfFull", name: "Chicken Madrasi Karahi", half: 1100, full: 2200, img: "images/1.36.jpg" },
    { id: "kh18", type: "halfFull", name: "Chicken Tikka Karahi", half: 1200, full: 2200, img: "images/1.37.jpg" },
    { id: "kh19", type: "standard", name: "Chicken Palak", price: 1400, img: "images/1.38.jpg" },

    // Chicken Handi
    { id: "kh20", type: "halfFull", name: "Z Special Butter Chicken Handi", half: 1300, full: 2500, img: "images/1.39.jpg" },
    { id: "kh21", type: "halfFull", name: "Malai Boti Masala Handi", half: 1250, full: 2400, img: "images/1.40.jpg" },
    { id: "kh22", type: "halfFull", name: "Chicken Red Handi", half: 1200, full: 2200, img: "images/1.41.jpg" },
    { id: "kh23", type: "halfFull", name: "Chicken White Handi", half: 1200, full: 2300, img: "images/1.42.jpg" },
    { id: "kh24", type: "halfFull", name: "Patyala Chicken Handi", half: 1200, full: 2300, img: "images/1.43.jpg" },
    { id: "kh25", type: "halfFull", name: "Tikka Masala Handi", half: 1200, full: 2200, img: "images/1.44.jpg" },
    { id: "kh26", type: "halfFull", name: "Chicken Hyderabadi Handi", half: 1200, full: 2200, img: "images/1.45.jpg" },
    { id: "kh27", type: "halfFull", name: "Chicken Rajasthani Handi", half: 1200, full: 2200, img: "images/1.46.jpg" },
    { id: "kh28", type: "halfFull", name: "Chicken Achari Handi", half: 1200, full: 2200, img: "images/1.47.jpg" },
    { id: "kh29", type: "halfFull", name: "Chicken Kabab Handi", half: 1200, full: 2200, img: "images/1.48.jpg" },
    { id: "kh30", type: "standard", name: "Chicken Ginger", price: 1200, img: "images/1.49.jpg" },
    { id: "kh31", type: "standard", name: "Chicken Jalfrezi", price: 1200, img: "images/1.50.jpg" },

    // Beef
    { id: "kh32", type: "halfFull", name: "Beef Karahi (Red)", half: 1600, full: 3000, img: "images/1.51.jpg" },
    { id: "kh33", type: "halfFull", name: "Beef Karahi (White)", half: 1400, full: 2600, img: "images/1.52.jpg" },
    { id: "kh34", type: "halfFull", name: "Beef Karahi Boneless", half: 1500, full: 2800, img: "images/1.53.jpg" },
    { id: "kh35", type: "halfFull", name: "Beef Qeema (with Matar)", half: 1800, full: 3000, img: "images/1.54.jpg" },
    { id: "kh36", type: "halfFull", name: "Beef Palak", half: 1800, full: 2000, img: "images/1.55.jpg" },

    // Veg Extras
    { id: "kh37", type: "standard", name: "Daal Mash", price: 499, img: "images/1.56.jpg" },
    { id: "kh38", type: "standard", name: "Mix Vegetables", price: 499, img: "images/1.57.jpg" },
    { id: "kh39", type: "standard", name: "Palak Paneer", price: 499, img: "images/1.58.jpg" }
];

const bbqList = [
    // Special BBQ Items
    { id: "bbq_sp1", type: "standard", name: "Turkish Boti (5 Pcs)", price: 1300, img: "images/2.3.jpg" },
    { id: "bbq_sp2", type: "standard", name: "Bombay Boti (5 Pcs)", price: 1200, img: "images/2.4.jpg" },
    { id: "bbq_sp3", type: "standard", name: "Shish Tauk (5 Pcs)", price: 1100, img: "images/2.5.jpg" },
    { id: "bbq_sp4", type: "standard", name: "Pizza Kabab (4 Pcs)", price: 1300, img: "images/2.6.jpg" },
    { id: "bbq_sp5", type: "standard", name: "Drum Stick White (6 Pcs)", price: 1300, img: "images/2.7.jpg" },
    { id: "bbq_sp6", type: "standard", name: "Tandoori Drum Stick (6 Pcs)", price: 1200, img: "images/2.8.jpg" },

    // Boti
    { id: "bbq1", type: "custom", name: "Lahori Boti", options: [{ label: "5 Pcs", price: 499 }, { label: "10 Pcs", price: 850 }], img: "images/1.59.jpg" },
    { id: "bbq2", type: "custom", name: "Malai Boti", options: [{ label: "5 Pcs", price: 499 }, { label: "10 Pcs", price: 950 }], img: "images/1.60.jpg" },
    { id: "bbq3", type: "custom", name: "Kasturi Boti", options: [{ label: "5 Pcs", price: 499 }, { label: "10 Pcs", price: 950 }], img: "images/1.61.jpg" },
    { id: "bbq4", type: "custom", name: "Haryali Boti", options: [{ label: "5 Pcs", price: 499 }, { label: "10 Pcs", price: 950 }], img: "images/1.62.jpg" },
    { id: "bbq5", type: "custom", name: "Achari Boti", options: [{ label: "5 Pcs", price: 499 }, { label: "10 Pcs", price: 950 }], img: "images/1.63.jpg" },

    // Kabab
    { id: "bbq6", type: "custom", name: "Lahori Kabab", options: [{ label: "2 Pcs", price: 499 }, { label: "4 Pcs", price: 950 }], img: "images/1.64.jpg" },
    { id: "bbq7", type: "custom", name: "Reshmi Kabab", options: [{ label: "2 Pcs", price: 499 }, { label: "4 Pcs", price: 950 }], img: "images/1.65.jpg" },
    { id: "bbq8", type: "custom", name: "Kasturi Kabab", options: [{ label: "2 Pcs", price: 499 }, { label: "4 Pcs", price: 950 }], img: "images/1.66.jpg" },
    { id: "bbq9", type: "custom", name: "Beef Kabab", options: [{ label: "2 Pcs", price: 599 }, { label: "4 Pcs", price: 1099 }], img: "images/1.67.jpg" },
    { id: "bbq10", type: "standard", name: "Chicken Tikka (Leg/Chest)", price: 350, img: "images/1.68.jpg" },

    // BBQ Platters
    { id: "bbq11", type: "standard", name: "Z.S Half BBQ Platter", price: 2499, img: "images/1.69.jpg" },
    { id: "bbq12", type: "standard", name: "Z.S Full BBQ Platter", price: 4499, img: "images/1.70.jpg" },
    { id: "bbq13", type: "standard", name: "BBQ Platter #1", price: 1599, img: "images/1.71.jpg" },
    { id: "bbq14", type: "standard", name: "BBQ Platter #2", price: 1399, img: "images/1.72.jpg" }
];

const pizzasList = [
    { id: "p1", type: "pizza", name: "Zainab Special Pizza", options: [{ label: "Small", price: 999 }, { label: "Medium", price: 1280 }, { label: "Large", price: 1799 }, { label: "Family", price: 2050 }], img: "images/1.73.jpg" },
    { id: "p2", type: "pizza", name: "Malai Boti Pizza", options: [{ label: "Small", price: 899 }, { label: "Medium", price: 1199 }, { label: "Large", price: 1799 }], img: "images/1.74.jpg" },
    { id: "p3", type: "pizza", name: "Crown Crust Pizza", options: [{ label: "Small", price: 899 }, { label: "Medium", price: 1150 }, { label: "Large", price: 1699 }], img: "images/1.75.jpg" },
    { id: "p4", type: "pizza", name: "Seafood Pizza", options: [{ label: "Small", price: 899 }, { label: "Medium", price: 1199 }, { label: "Large", price: 1750 }], img: "images/1.76.jpg" },
    { id: "p5", type: "pizza", name: "Kabab Pizza", options: [{ label: "Small", price: 850 }, { label: "Medium", price: 1199 }, { label: "Large", price: 1699 }], img: "images/1.77.jpg" },
    { id: "p6", type: "pizza", name: "Super Supreme Pizza", options: [{ label: "Small", price: 799 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1680 }], img: "images/1.78.jpg" },
    { id: "p7", type: "pizza", name: "Fajita Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }], img: "images/1.79.jpg" },
    { id: "p8", type: "pizza", name: "Tikka Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }], img: "images/1.80.jpg" },
    { id: "p9", type: "pizza", name: "Bar B.Q Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }], img: "images/1.81.jpg" },
    { id: "p10", type: "pizza", name: "Pepperoni Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }, { label: "Family", price: 1800 }], img: "images/1.82.jpg" },
    { id: "p11", type: "pizza", name: "Peri Peri Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }], img: "images/1.83.jpg" },
    { id: "p12", type: "pizza", name: "Cheese Lover Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1050 }, { label: "Large", price: 1599 }], img: "images/1.84.jpg" },
    { id: "p13", type: "pizza", name: "Crunchy Pizza", options: [{ label: "Medium", price: 1050 }, { label: "Large", price: 1750 }], img: "images/2.9.jpg" },
    { id: "p14", type: "pizza", name: "Loaded Pizza", options: [{ label: "Small", price: 899 }, { label: "Medium", price: 1450 }, { label: "Large", price: 1900 }, { label: "Family", price: 2300 }], img: "images/2.10.jpg" },
    { id: "p15", type: "pizza", name: "Chicken Cheese Stuffer Pizza", options: [{ label: "Medium", price: 1450 }, { label: "Large", price: 2000 }, { label: "Family", price: 2300 }], img: "images/2.11.jpg" },
    { id: "p16", type: "pizza", name: "Square Pizza", options: [{ label: "Medium", price: 1450 }, { label: "Large", price: 2100 }, { label: "Family", price: 2200 }], img: "images/2.12.jpg" },
    { id: "p17", type: "custom", name: "Extra Topping", options: [{ label: "Small", price: 100 }, { label: "Medium", price: 150 }, { label: "Large", price: 200 }], img: "images/1.85.jpg" }
];

const burgersAndFastFood = [
    // Sandwiches
    { id: "bf1", type: "standard", name: "Z.Special Mexican Sandwich", price: 849, img: "images/1.86.jpg" },
    { id: "bf2", type: "standard", name: "Tikka Sandwich", price: 550, img: "images/1.87.jpg" },
    { id: "bf3", type: "standard", name: "Grilled Chicken Sandwich", price: 550, img: "images/1.88.jpg" },
    { id: "bf4", type: "standard", name: "Club Sandwich", price: 550, img: "images/1.89.jpg" },
    { id: "bf5", type: "standard", name: "Spicy Chicken Sandwich", price: 550, img: "images/1.90.jpg" },
    { id: "bf6", type: "standard", name: "Calzone", price: 1050, img: "images/1.91.jpg" },
    { id: "bf7", type: "standard", name: "Cheese Stick", price: 899, img: "images/1.92.jpg" },

    // Burgers
    { id: "bf8", type: "standard", name: "Z.Special Jalapeno Burger", price: 550, img: "images/1.93.jpg" },
    { id: "bf9", type: "standard", name: "Chicken Fried Burger", price: 399, img: "images/1.94.jpg" },
    { id: "bf10", type: "standard", name: "Chicken Patty Burger", price: 399, img: "images/1.95.jpg" },
    { id: "bf11", type: "standard", name: "Grilled Chicken Burger", price: 550, img: "images/1.96.jpg" },
    { id: "bf12", type: "standard", name: "Zinger Cheese Burger", price: 499, img: "images/1.97.jpg" },
    { id: "bf13", type: "standard", name: "Zinger Burger", price: 399, img: "images/1.98.jpg" },
    { id: "bf8_new1", type: "standard", name: "Double Stacker Burger (2 Zinger Pcs)", price: 699, img: "images/1.99.jpg" },
    { id: "bf8_new2", type: "standard", name: "Fillet Burger", price: 550, img: "images/2.13.jpg" },
    { id: "bf8_new3", type: "standard", name: "Tower Burger (Patty + Zinger)", price: 550, img: "images/2.14.jpg" },

    // Wraps & Shawarma
    { id: "bf14", type: "standard", name: "Z.Special Wraps", price: 450, img: "images/2.15.jpg" },
    { id: "bf15", type: "standard", name: "Crispy Twister Wraps", price: 350, img: "images/1.100.jpg" },
    { id: "bf16", type: "standard", name: "Mexican Wraps", price: 350, img: "images/1.101.jpg" },
    { id: "bf17", type: "standard", name: "Z.Special Chicken Grill Shawarma", price: 350, img: "images/1.102.jpg" },
    { id: "bf18", type: "standard", name: "Tikka Shawarma", price: 300, img: "images/1.103.jpg" },
    { id: "bf14_new1", type: "standard", name: "Zinger Paratha Roll", price: 450, img: "images/2.16.jpg" },
    { id: "bf14_new2", type: "standard", name: "Malai Boti Wraps", price: 450, img: "images/2.17.jpg" },
    { id: "bf14_new3", type: "standard", name: "Tikka Wraps", price: 450, img: "images/2.18.jpg" },
    { id: "bf14_new4", type: "standard", name: "Peri Peri Wraps", price: 450, img: "images/2.19.jpg" },

    // Rolls & Fast Food Platter
    { id: "bf19", type: "standard", name: "Z.Special Platter (Fast Food)", price: 999, img: "images/1.104.jpg" },
    { id: "bf20", type: "standard", name: "Spin Roll", price: 599, img: "images/1.105.jpg" },
    { id: "bf21", type: "standard", name: "Chili Mili Roll", price: 599, img: "images/1.106.jpg" }
];

const pastasSteaksChinese = [
    // Steaks
    { id: "psc1", type: "standard", name: "Black Pepper Steak", price: 1350, img: "images/1.107.jpg" },
    { id: "psc2", type: "standard", name: "Jalapeno Steak", price: 1350, img: "images/1.108.jpg" },
    { id: "psc3", type: "standard", name: "Mushroom Steak", price: 1350, img: "images/1.109.jpg" },

    // Pasta
    { id: "psc4", type: "standard", name: "Lasagna Pasta", price: 949, img: "images/1.110.jpg" },
    { id: "psc5", type: "standard", name: "Fettuccine Alfredo Pasta (White Sauce)", price: 799, img: "images/1.111.jpg" },
    { id: "psc6", type: "standard", name: "Penne Arrabiata Pasta (Red Sauce)", price: 799, img: "images/1.112.jpg" },
    { id: "psc7", type: "standard", name: "Creamy Pasta", price: 799, img: "images/1.113.jpg" },
    { id: "psc8", type: "standard", name: "Crunchy Pasta", price: 799, img: "images/1.114.jpg" },
    { id: "psc9", type: "standard", name: "Pizza Fries Pasta", price: 799, img: "images/1.115.jpg" },
    { id: "psc10", type: "standard", name: "Fajita Pasta", price: 499, img: "images/1.116.jpg" },

    // Chinese
    { id: "psc11", type: "standard", name: "Z. Special CashewNut Chicken", price: 1699, img: "images/1.117.jpg" },
    { id: "psc12", type: "standard", name: "Chicken Chili Dry", price: 1599, img: "images/1.118.jpg" },
    { id: "psc13", type: "standard", name: "Chicken Manchurian", price: 1599, img: "images/1.119.jpg" },
    { id: "psc14", type: "standard", name: "Chicken Shashlik (With Rice)", price: 1599, img: "images/1.120.jpg" },
    { id: "psc15", type: "standard", name: "Kung Pao Chicken", price: 1599, img: "images/1.121.jpg" },
    { id: "psc16", type: "standard", name: "Garlic Chicken", price: 1599, img: "images/1.122.jpg" },
    { id: "psc17", type: "standard", name: "Chicken Chowmein", price: 850, img: "images/1.123.jpg" },
    { id: "psc18", type: "standard", name: "Vegetable Chowmein", price: 750, img: "images/1.124.jpg" },

    // Chinese Platters
    { id: "cp1", type: "standard", name: "Chinese Platter #1", price: 2599, img: "images/2.20.jpg" },
    { id: "cp2", type: "standard", name: "Chinese Platter #2", price: 2499, img: "images/2.21.jpg" },
    { id: "cp3", type: "standard", name: "Chinese Platter #3", price: 2399, img: "images/2.22.jpg" }
];

const soupsAndStarters = [
    // Soups
    { id: "ss1", type: "custom", name: "Z.Special Soup", options: [{ label: "Small", price: 330 }, { label: "Half", price: 999 }, { label: "Full", price: 1699 }], img: "images/1.125.jpg" },
    { id: "ss2", type: "custom", name: "19B Soup", options: [{ label: "Small", price: 330 }, { label: "Half", price: 999 }, { label: "Full", price: 1699 }], img: "images/1.126.jpg" },
    { id: "ss3", type: "custom", name: "Hot & Sour Soup", options: [{ label: "Small", price: 280 }, { label: "Half", price: 699 }, { label: "Full", price: 1050 }], img: "images/1.127.jpg" },
    { id: "ss4", type: "custom", name: "Chicken Corn Soup", options: [{ label: "Small", price: 280 }, { label: "Half", price: 750 }, { label: "Full", price: 1050 }], img: "images/1.128.jpg" },
    { id: "ss5", type: "custom", name: "Vegetable Soup", options: [{ label: "Small", price: 250 }, { label: "Half", price: 550 }, { label: "Full", price: 950 }], img: "images/1.129.jpg" },
    { id: "ss6", type: "custom", name: "Chicken Thai Soup", options: [{ label: "Small", price: 250 }, { label: "Half", price: 650 }, { label: "Full", price: 1050 }], img: "images/1.130.jpg" },
    { id: "ss7", type: "standard", name: "Crackers", price: 150, img: "images/1.131.jpg" },

    // Appetizer
    { id: "ss8", type: "standard", name: "Honey Wings (8 Pcs)", price: 600, img: "images/1.132.jpg" },
    { id: "ss9", type: "standard", name: "Fried Wings (8 Pcs)", price: 600, img: "images/1.133.jpg" },
    { id: "ss10", type: "standard", name: "Nuggets (10 Pcs)", price: 500, img: "images/1.134.jpg" },
    { id: "ss11", type: "standard", name: "Fish & Chips", price: 999, img: "images/1.135.jpg" },
    { id: "ss12", type: "standard", name: "Dhakha Chicken", price: 1090, img: "images/1.136.jpg" },
    { id: "ss13", type: "standard", name: "Chicken Pakora (10 Pcs)", price: 1090, img: "images/1.137.jpg" },
    { id: "ss14", type: "custom", name: "Plain Fries", options: [{ label: "Small", price: 220 }, { label: "Large", price: 400 }], img: "images/1.138.jpg" },
    { id: "ss15", type: "custom", name: "Bar B.Q Fries", options: [{ label: "Small", price: 250 }, { label: "Large", price: 400 }], img: "images/1.139.jpg" },
    { id: "ss16", type: "standard", name: "Loaded Cheese Fries", price: 499, img: "images/1.140.jpg" },
    { id: "ss17", type: "custom", name: "Garlic Mayo Fries", options: [{ label: "Small", price: 250 }, { label: "Large", price: 399 }], img: "images/1.141.jpg" }
];

const riceAndTandoor = [
    // Rice Cuisine
    { id: "rt1", type: "standard", name: "Z.Special Biryani", price: 1199, img: "images/1.142.jpg" },
    { id: "rt2", type: "standard", name: "Mutton Biryani", price: 1199, img: "images/1.143.jpg" },
    { id: "rt3", type: "standard", name: "Beef Biryani", price: 999, img: "images/1.144.jpg" },
    { id: "rt4", type: "standard", name: "Hyderabadi Biryani", price: 1050, img: "images/1.145.jpg" },
    { id: "rt5", type: "standard", name: "Chicken Biryani", price: 750, img: "images/1.146.jpg" },
    { id: "rt6", type: "standard", name: "Kabuli Pulao (Mutton)", price: 1199, img: "images/1.147.jpg" },
    { id: "rt7", type: "standard", name: "Beef Pulao", price: 999, img: "images/1.148.jpg" },
    { id: "rt8", type: "standard", name: "Kabuli Pulao (Chicken)", price: 750, img: "images/1.149.jpg" },
    { id: "rt9", type: "standard", name: "Vegetable Pulao", price: 699, img: "images/1.150.jpg" },
    { id: "rt10", type: "standard", name: "Chicken Fried Rice", price: 799, img: "images/1.151.jpg" },
    { id: "rt11", type: "standard", name: "Egg Fried Rice", price: 799, img: "images/1.152.jpg" },
    { id: "rt12", type: "standard", name: "Chicken Masala Rice", price: 799, img: "images/1.153.jpg" },
    { id: "rt13", type: "standard", name: "Garlic Rice", price: 750, img: "images/1.154.jpg" },
    { id: "rt14", type: "standard", name: "Zeera Rice", price: 450, img: "images/1.155.jpg" },
    { id: "rt15", type: "standard", name: "Plain Rice", price: 400, img: "images/1.156.jpg" },

    // Tandoor
    { id: "rt16", type: "standard", name: "Z.Special Cheese Naan", price: 450, img: "images/1.157.jpg" },
    { id: "rt17", type: "standard", name: "Qeema Naan", price: 300, img: "images/1.158.jpg" },
    { id: "rt18", type: "standard", name: "Tikka Naan", price: 300, img: "images/1.159.jpg" },
    { id: "rt19", type: "standard", name: "Afghani Naan", price: 300, img: "images/1.160.jpg" },
    { id: "rt20", type: "standard", name: "Punjabi Naan", price: 250, img: "images/1.161.jpg" },
    { id: "rt21", type: "standard", name: "Garlic Naan", price: 140, img: "images/1.162.jpg" },
    { id: "rt22", type: "standard", name: "Kalonji Naan", price: 140, img: "images/1.163.jpg" },
    { id: "rt23", type: "standard", name: "Roghni Naan", price: 90, img: "images/1.164.jpg" },
    { id: "rt24", type: "standard", name: "Plain Naan", price: 60, img: "images/1.165.jpg" },
    { id: "rt25", type: "standard", name: "Tandoori Paratha", price: 149, img: "images/1.166.jpg" },
    { id: "rt26", type: "standard", name: "Roti (Per Head)", price: 99, img: "images/1.167.jpg" }
];

const saladsAndRaita = [
    { id: "sr1", type: "halfFull", name: "Z.Special Salad", half: 599, full: 1050, img: "images/1.168.jpg" },
    { id: "sr2", type: "halfFull", name: "Russian Salad", half: 450, full: 899, img: "images/1.169.jpg" },
    { id: "sr3", type: "standard", name: "Kachumar Salad", price: 250, img: "images/1.170.jpg" },
    { id: "sr4", type: "standard", name: "Fresh Salad", price: 200, img: "images/1.171.jpg" },
    { id: "sr5", type: "standard", name: "Z. Special Fresh Salad", price: 400, img: "images/2.23.jpg" },
    { id: "sr6", type: "standard", name: "Z. Special Fresh Salad with Chili Garlic", price: 480, img: "images/2.24.jpg" },
    { id: "sr7", type: "standard", name: "Mint Raita", price: 140, img: "images/1.172.jpg" },
    { id: "sr8", type: "standard", name: "Zeera Raita", price: 140, img: "images/1.173.jpg" },
    { id: "sr9", type: "standard", name: "Afghani Chutney", price: 150, img: "images/1.174.jpg" }
];

const dessertsAndIceCream = [
    { id: "di1", type: "custom", name: "Gajar Halwa", options: [{ label: "Small", price: 350 }, { label: "Half", price: 950 }, { label: "Full", price: 1800 }], img: "images/1.175.jpg" },
    { id: "di2", type: "standard", name: "Arabian Delight", price: 300, img: "images/1.176.jpg" },
    { id: "di3", type: "standard", name: "Kheer", price: 250, img: "images/1.177.jpg" },
    { id: "di4", type: "standard", name: "Gulab Jamun", price: 250, img: "images/1.178.jpg" },
    { id: "di5", type: "standard", name: "Ras Malai", price: 250, img: "images/1.179.jpg" },
    { id: "di6", type: "standard", name: "Ras Gulla", price: 250, img: "images/1.180.jpg" },
    { id: "di7", type: "standard", name: "Sooji Halwa", price: 250, img: "images/1.181.jpg" },

    // Ice Cream Flavours
    {
        id: "di8",
        type: "custom",
        name: "Ice Cream (Pista, Mango, Kulfa, Strawberry, Chocolate, Tutti Fruity, Vanilla, Coffee, Coconut)",
        options: [
            { label: "1 Scoop", price: 150 },
            { label: "2 Scoops", price: 300 },
            { label: "3 Scoops", price: 400 }
        ],
        img: "images/1.182.jpg"
    }
];

const barDrinksList = [
    // Cocktails
    { id: "bd1", type: "standard", name: "Z. Special Cocktail", price: 599, img: "images/1.183.jpg" },
    { id: "bd2", type: "standard", name: "Anarkali Cocktail", price: 499, img: "images/1.184.jpg" },
    { id: "bd3", type: "standard", name: "Shalimar Cocktail", price: 499, img: "images/1.185.jpg" },
    { id: "bd4", type: "standard", name: "Kashmiri Cocktail", price: 499, img: "images/1.186.jpg" },
    { id: "bd5", type: "standard", name: "Gujrati Cocktail", price: 499, img: "images/1.187.jpg" },
    { id: "bd6", type: "standard", name: "Punjabi Cocktail", price: 499, img: "images/1.188.jpg" },
    { id: "bd7", type: "standard", name: "Virgin Mojito", price: 499, img: "images/1.189.jpg" },

    // Lassi
    {
        id: "bd8", type: "custom", name: "Lassi Options", options: [
            { label: "Mango Lassi", price: 199 },
            { label: "Salted Lassi", price: 199 },
            { label: "Sweet Lassi", price: 199 },
            { label: "Banana Lassi", price: 199 },
            { label: "Strawberry Lassi", price: 199 },
            { label: "Rose Lassi", price: 199 },
            { label: "Mint Lassi", price: 199 }
        ], img: "images/1.190.jpg"
    },

    // Cold Beverages
    { id: "bd9", type: "standard", name: "Mint Margarita", price: 300, img: "images/1.191.jpg" },
    { id: "bd10", type: "standard", name: "Lemonade", price: 250, img: "images/1.192.jpg" },
    { id: "bd11", type: "standard", name: "Pina Colada", price: 350, img: "images/1.193.jpg" },
    { id: "bd12", type: "standard", name: "Blue Colada", price: 400, img: "images/1.194.jpg" },
    { id: "bd13", type: "standard", name: "Strawberry Colada", price: 400, img: "images/1.195.jpg" },
    { id: "bd14", type: "standard", name: "Peach Mojito", price: 400, img: "images/1.196.jpg" },
    { id: "bd15", type: "standard", name: "Strawberry Mojito", price: 400, img: "images/1.197.jpg" },
    { id: "bd16", type: "standard", name: "Mint Mojito", price: 350, img: "images/1.198.jpg" },
    { id: "bd17", type: "standard", name: "Fresh Lime", price: 250, img: "images/1.199.jpg" },

    // Coffee
    { id: "bd18", type: "standard", name: "Cappuccino", price: 350, img: "images/1.200.jpg" },
    { id: "bd19", type: "standard", name: "Moccacino", price: 350, img: "images/1.201.jpg" },
    { id: "bd20", type: "standard", name: "Latte", price: 350, img: "images/1.202.jpg" },
    { id: "bd21", type: "standard", name: "Espresso", price: 400, img: "images/1.203.jpg" },
    { id: "bd22", type: "standard", name: "Hot Chocolate Coffee", price: 350, img: "images/1.204.jpg" },
    { id: "bd23", type: "standard", name: "Black Coffee", price: 350, img: "images/1.205.jpg" },
    { id: "bd24", type: "standard", name: "Cold Coffee", price: 400, img: "images/1.206.jpg" },

    // Tea
    { id: "bd25", type: "standard", name: "Kashmiri Tea", price: 250, img: "images/1.207.jpg" },
    { id: "bd26", type: "standard", name: "Cardamom Tea", price: 230, img: "images/1.208.jpg" },
    { id: "bd27", type: "standard", name: "Karak Tea", price: 230, img: "images/1.209.jpg" },
    { id: "bd28", type: "standard", name: "Green Tea", price: 120, img: "images/1.210.jpg" },
    { id: "bd29", type: "standard", name: "Mix Tea", price: 150, img: "images/1.211.jpg" },

    // Shakes
    {
        id: "bd30", type: "custom", name: "Shakes", options: [
            { label: "Vanilla Shake", price: 400 },
            { label: "Chocolate Shake", price: 400 },
            { label: "Mango Shake", price: 400 },
            { label: "Strawberry Shake", price: 400 },
            { label: "Pista Shake", price: 400 },
            { label: "Kitkat Shake", price: 450 },
            { label: "Snicker Shake", price: 450 },
            { label: "Peanut Shake", price: 450 },
            { label: "Coconut Shake", price: 450 },
            { label: "Date Shake", price: 450 },
            { label: "Apple Shake", price: 350 },
            { label: "Banana Shake", price: 350 }
        ], img: "images/1.212.jpg"
    },

    // Fresh Juices
    {
        id: "bd31", type: "custom", name: "Fresh Juices", options: [
            { label: "Strawberry Juice", price: 450 },
            { label: "Orange Juice", price: 450 },
            { label: "Peach Juice", price: 450 },
            { label: "Chaqandar Juice", price: 450 },
            { label: "Carrot Juice", price: 450 },
            { label: "Mango Juice", price: 450 }
        ], img: "images/1.213.jpg"
    }
];

const menuCategories = [
    { id: "deals", title: "🔥 Fast Food Deals", items: specialDeals, isDeal: true },
    { id: "zainab-special", title: "👑 Zainab Special List", items: zainabSpecialList },
    { id: "karahi-handi", title: "🍲 Karahi, Handi & Desi", items: karahiAndHandiList },
    { id: "bbq", title: "🍢 Bar B.Q & Platters", items: bbqList },
    { id: "pizzas", title: "🍕 Pizzas", items: pizzasList },
    { id: "burgers", title: "🍔 Burgers, Sandwiches & Fast Food", items: burgersAndFastFood },
    { id: "pastas-steaks", title: "🥩 Steaks, Pastas & Chinese", items: pastasSteaksChinese },
    { id: "soups-starters", title: "🥣 Soups & Appetizers", items: soupsAndStarters },
    { id: "rice-tandoor", title: "🍚 Rice Cuisine & Tandoor", items: riceAndTandoor },
    { id: "salads", title: "🥗 Salads & Raita", items: saladsAndRaita },
    { id: "desserts", title: "🍨 Desserts & Ice Cream", items: dessertsAndIceCream },
    { id: "bar-drinks", title: "🍹 Bar Menu (Drinks, Coffee, Tea)", items: barDrinksList }
];

// ==================== STATE ====================
let cart = [];
let isMobileMenuOpen = false;

// Helper to get image URL
const getImgUrl = (img) => (img ? img : 'images/placeholder.jpg');

// ==================== RENDER NAVBAR ====================
function renderNavbar() {
    const navContainer = document.getElementById('navbar-links');
    const mobileNavContainer = document.getElementById('mobile-nav-overlay');

    const linksHtml = navLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join('');
    navContainer.innerHTML = linksHtml;
    mobileNavContainer.innerHTML = linksHtml;

    // Mobile nav click listeners
    mobileNavContainer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', toggleMenu);
    });
}

function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const overlay = document.getElementById('mobile-nav-overlay');
    const backdrop = document.getElementById('menu-backdrop');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    if (isMobileMenuOpen) {
        overlay.classList.add('open');
        backdrop.classList.add('show');
        hamburgerBtn.innerText = '✕';
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('open');
        backdrop.classList.remove('show');
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'unset';
    }
}

// ==================== RENDER DISH CARDS (DishCard Component) ====================
function renderMenuSections() {
    const menuContainer = document.getElementById('menu-sections');
    let html = '';

    menuCategories.forEach(cat => {
        html += `<section id="${cat.id}">
            <h2 class="section-title">${cat.title}</h2>
            <div class="cards-grid">`;

        cat.items.forEach(item => {
            if (cat.isDeal) {
                html += `
                    <div class="dish-card">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.title}</h4>
                            <p class="deal-details">${item.details}</p>
                            <p class="card-price">Rs. ${item.price}</p>
                            <button class="add-btn" onclick="addToCart('${item.title}', ${item.price})">
                                Add Deal 🛒
                            </button>
                        </div>
                    </div>`;
            } else if (item.type === 'standard') {
                html += `
                    <div class="dish-card">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.name}</h4>
                            <p class="card-price">Rs. ${item.price}</p>
                            <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">
                                Add 🛒
                            </button>
                        </div>
                    </div>`;
            } else {
                let options = [];
                if (item.type === 'pizza' || item.type === 'custom') {
                    options = item.options.map(opt => ({ label: `${opt.label} - Rs. ${opt.price}`, name: `${item.name} (${opt.label})`, price: opt.price }));
                } else if (item.type === 'halfFull') {
                    options = [
                        { label: `Half - Rs. ${item.half}`, name: `${item.name} (Half)`, price: item.half },
                        { label: `Full - Rs. ${item.full}`, name: `${item.name} (Full)`, price: item.full }
                    ];
                }

                html += `
                    <div class="dish-card" id="card-${item.id}">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.name}</h4>
                            <select class="size-select" id="select-${item.id}" onchange="updateDynamicCardPrice('${item.id}', ${JSON.stringify(options).replace(/"/g, '&quot;')})">
                                ${options.map((opt, idx) => `<option value="${idx}">${opt.label}</option>`).join('')}
                            </select>
                            <p class="card-price" id="price-${item.id}">Rs. ${options[0].price}</p>
                            <button class="add-btn" id="btn-${item.id}" onclick="addDynamicOptionToCart('${item.id}', ${JSON.stringify(options).replace(/"/g, '&quot;')})">
                                Add 🛒
                            </button>
                        </div>
                    </div>`;
            }
        });

        html += `</div></section>`;
    });

    menuContainer.innerHTML = html;
}

function updateDynamicCardPrice(itemId, options) {
    const select = document.getElementById(`select-${itemId}`);
    const selectedIdx = select.value;
    const priceElem = document.getElementById(`price-${itemId}`);
    priceElem.innerText = `Rs. ${options[selectedIdx].price}`;
}

function addDynamicOptionToCart(itemId, options) {
    const select = document.getElementById(`select-${itemId}`);
    const selectedIdx = select.value;
    const currentOption = options[selectedIdx] || options[0];
    addToCart(currentOption.name, currentOption.price);
}

// ==================== CART MANAGEMENT (Cart Component Logic) ====================
function addToCart(name, price) {
    const existingIndex = cart.findIndex(item => item.name === name);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCartUI();
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalBillElem = document.getElementById('total-bill');
    const mobileCartCount = document.getElementById('mobile-cart-count');

    let totalBill = 0;
    let totalCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <li style="color: #888; border: none; text-align: center; padding: 15px 0;">
                Your cart is empty.
            </li>`;
    } else {
        let itemsHtml = '';
        cart.forEach((item, index) => {
            const cost = item.price * item.qty;
            totalBill += cost;
            totalCount += item.qty;

            itemsHtml += `
                <li class="cart-item-row">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">Rs. ${cost}</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn minus" onclick="updateQty(${index}, -1)">−</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn plus" onclick="updateQty(${index}, 1)">+</button>
                        </div>
                        <button class="cart-del-btn" onclick="removeItem(${index})" title="Remove Item">🗑️</button>
                    </div>
                </li>`;
        });
        cartItemsContainer.innerHTML = itemsHtml;
    }

    totalBillElem.innerText = totalBill;
    mobileCartCount.innerText = totalCount;
}

// ==================== ORDER SUBMISSION ====================
function handleSendOrder() {
    const nameInput = document.getElementById('cust-name');
    const addressInput = document.getElementById('cust-address');
    const paymentSelect = document.getElementById('payment-method');

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const paymentMethod = paymentSelect.value;

    if (cart.length === 0) {
        alert("Your Cart is Empty!");
        return;
    }

    // Total calculate karna validation se pehle
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
    });

    // Minimum order check (Rs. 1499 requirement)
    if (total <= 1499) {
        alert("Invalid Order! Minimum order delivery amount is Rs. 1499. Please add more items.");
        return;
    }

    if (!name || !address) {
        alert("Must Enter Your Name aur Address for Delivery process!");
        return;
    }

    const userConfirmation = window.confirm("Do you want to confirm this order?");
    if (!userConfirmation) return;

    let msg = "  NEW ORDER (Zainab Restaurant) FROM APP \n\n";
    msg += `👤 *Name:* ${name}\n📍 *Address:* ${address}\n💳 *Payment:* ${paymentMethod}\n-------------\n`;

    let itemsTextList = [];

    cart.forEach((item, idx) => {
        let cost = item.price * item.qty;
        msg += `${idx + 1}. *${item.name}* x ${item.qty} = Rs. ${cost}\n`;
        itemsTextList.push(`${item.name} (Qty: ${item.qty})`);
    });
    msg += `-------------\n💰 *Total Payable: Rs. ${total}*\n\nKindly confirm my order!`;

    const orderData = {
        name: name,
        location: address,
        payment: paymentMethod,
        items: itemsTextList.join("\n "),
        total: total
    };

    // 1. Send data to Google Sheet
    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
    }).catch((error) => console.error("Error saving to Google Sheets:", error));

    // WhatsApp redirect (Works on Mobile & PC)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CAFE_WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    // Clear inputs and cart
    nameInput.value = '';
    addressInput.value = '';
    clearCart();
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderMenuSections();
    updateCartUI();

    document.getElementById('hamburger-btn').addEventListener('click', toggleMenu);
    document.getElementById('menu-backdrop').addEventListener('click', toggleMenu);
    document.getElementById('send-order-btn').addEventListener('click', handleSendOrder);
});