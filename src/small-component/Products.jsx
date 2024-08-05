
const productList = () => [
  {
    name: "Youtheory Collagen",
    price: "1000",
    sub_name: "+biotin , 390 tablets",
    img: "images/no-design-products/collagen.jpg",
    url: "https://shopee.ph/Youtheory-Collagen-biotin-Enhanced-formula-390-tablets-EXP-11-2025-NEW-STOCK--i.202834722.13190956251?xptdk=977c1631-5f10-4379-9a55-bf02f94d56ed",
    review: "Been taking the same product since last year but  Its my 1st time to take it with biotin.. Will still observe the difference... Hope its much better than the one without BIOTin...  Item is well packed and the bottle itself is sealed.... Thank you seller, ill hold on to your statement that the product is Legit.",
    promoText: "Free Shipping",
    promoText2: "Best Seller"
  },
  {
    name: "Fresh Cut Lilacs",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/fresh-cut-lilacs.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "The product is legit! Thank you so much seller, very approachable ❤️",
    promoText: "New Arrival",
    promoText2: "New"
  },  
  {
    name: "Pink Chiffon",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/pink-chiffon.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "I love Pink Chiffon! The scent is a perfect blend of sweet vanilla and floral notes. It’s light and lasts all day without being overpowering. The bottle is pretty and the price is great. Highly recommend!",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Berry Waffle Cone",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/berry-waffle.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang bango niya, at kahit buong araw, naamoy ko pa rin. Maganda ang bote at sulit sa presyo.",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Twisted Peppermint",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/twisted-peppermint.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang ganda ng Twisted Peppermint na ito! Ang bango niya parang Christmas na kahit tag-init. Malamig sa balat at sobrang refreshing. Perfect na pamper sa sarili after a long day. Ang packaging cute din. Sulit na sulit, babalik ako para bumili ulit. 😍🎄",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Bare Vanilla",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/bare-vanilla.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang ganda ng Bare Vanilla! Mabango siya pero hindi overpowering, perfect for everyday use. Soft and sweet scent na hindi masakit sa ilong. Plus, long-lasting siya, kaya tipid din. Ang packaging cute at simple. Definitely worth it.",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Midnight Bloom",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/midnight-bloom.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang Midnight Bloom ay sobrang bango! Ang scent niya parang floral with a hint of mystery. Light pero sophisticated ang amoy, kaya pwede sa kahit anong okasyon. Long-lasting din siya at hindi matapang. Talagang worth it, bibili ulit ako! 🌸✨",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Strawberry and Champaigne",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/straw-champ.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang Midnight Bloom ay sobrang bango! Ang scent niya parang floral with a hint of mystery. Light pero sophisticated ang amoy, kaya pwede sa kahit anong okasyon. Long-lasting din siya at hindi matapang. Talagang worth it, bibili ulit ako! 🌸✨",
    promoText: "New Arrival",
    promoText2: "New"
  },
  {
    name: "Velvet Petal",
    price: "464",
    sub_name: "BATH & BODY WORKS",
    img: "images/no-design-products/velvet-petal.png",
    url: "https://shopee.ph/%F0%9F%87%BA%F0%9F%87%B8Bath-Body-Works-Perfume-ORIGINAL-ONHAND--i.202834722.21953653795?xptdk=8e16a4cd-d2ea-4ad8-83f5-df38d4220c26",
    review: "Ang Velvet Petal ay super bango! Ang scent niya soft and sweet, parang velvety floral. Magaan sa pakiramdam at perfect for daily wear. Long-lasting din, kaya sulit na sulit. Ang packaging stylish at elegant. Definitely isang must-have! 💖🌹",
    promoText: "New Arrival",
    promoText2: "New"
  },
];

export default productList;