import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../products/products';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = [
            {
                "short_name": "NUTELLA FERRERO",
                "description": "HAZELNUT PASTA WITH COCOA.",
                "price": "4.45",
                "brand_name": "NUTELLA",
                "netweight": "825 g",
                "image_url": "https: //colruyt.collectandgo.be/cogo/step/JPG/JPG/500x500/std.lang.all/42/89/asset-1444289.jpg",
                "keywords": "nutella,ferrero,chocolate spread"
            },
            {
                "short_name": "KELLOGG'S CORN FLAKES",
                "description": "Roasted corn flakes, enriched with vitamins and iron.",
                "price": "3.38",
                "brand_name": "KELLOGG'S",
                "netweight": "750 g",
                "image_url": "https://fic.colruytgroup.com/productinfo/step/JPG/JPG/320x320/std.lang.all/73/73/asset-757373.jpg",
                "keywords": "corn flakes, kellogg's,breakfast cereal"
            },
            {
                "short_name": "Dettol hand soap",
                "description": "hand soap No-Touch ass.",
                "price": "4.05",
                "brand_name": "DETTOL",
                "netweight": "250ml",
                "image_url": "https://colruyt.collectandgo.be/cogo/step/JPG/JPG/500x500/std.lang.all/72/21/asset-1317221.jpg",
                "keywords": "dettol, hand soap"
            },
            {
                "short_name": "Dettol liquid soap",
                "description": "hand soap No-Touch ass.",
                "price": "4.05",
                "brand_name": "DETTOL",
                "netweight": "250ml",
                "image_url": "https://colruyt.collectandgo.be/cogo/step/JPG/JPG/500x500/std.lang.all/72/21/asset-1317221.jpg",
                "keywords": "dettol, hand soap"
            },
            {
                "short_name": "Dry white wine Chenin 3 L",
                "description": "The chenind grape is harvested early in the year, at the beginning of the South African autumn. The picking mainly happens overnight, when it is cool. This way the grapes retain their fresh aromas. You can taste aromas of white fruit (pear) and fresh acid that make the wine very lively. He also has a nice fruity aftertaste. Pour it young and cool (8 to 10 ° C) as an aperitif and with salads.",
                "price": "2.99",
                "brand_name": "blijgedacht",
                "netweight": "3L",
                "image_url": "https://www.bigbasket.com/media/uploads/p/s/40007735_3-carl-jung-merlot-de-alcoholised-wine.jpg",
                "keywords": "wine"
            },
            {
                "short_name": "Voltas 1.5 Ton 5 Star BEE Rating 2017 Split AC - Red (185EY(R), Aluminium Condenser)",
                "description": "This summer, bring home the powerful Voltas 5-Star 1.5 ton Split AC and experience comfort like never before.",
                "price": "999",
                "brand_name": "voltas",
                "netweight": "",
                "image_url": "https://rukminim1.flixcart.com/image/312/312/jdkjzww0/air-conditioner-new/5/z/h/185ey-r-1-5-split-voltas-original-imaf2gacuybzutem.jpeg?q=70",
                "keywords": "AC,voltas"
            },
            {
                "short_name": "Fossil BQ2125 Watch - For Men",
                "description": "Analog watches with a leather strap never go out of style. Ideal for swimmers and athletes, this stylish analog watch from Fossil comes with a water resistance of 50 mm. You’d never have to think about switches watches while training and while going out, as this elegantly designed watch from Fossil brings the best of both worlds, combining style and technology.",
                "price": "499",
                "brand_name": "fossil",
                "netweight": "200g",
                "image_url": "https://rukminim1.flixcart.com/image/312/312/jbzedu80/watch/v/h/f/bq2125-fossil-original-imaff7pjq7ya9bw6.jpeg?q=70",
                "keywords": "watch,fossil"
            },
            {
                "short_name": "Fossil BQ3182 Watch - For Women",
                "description": "Analog stylish watch for women",
                "price": "399",
                "brand_name": "fossil",
                "netweight": "250g",
                "image_url": "https://rukminim1.flixcart.com/image/312/312/jdj4k280/watch/t/v/b/bq3182-fossil-original-imaf2bucvwrbfepz.jpeg?q=70",
                "keywords": "watch,fossil"
            },
            {
                "short_name": "Fossil CH2647 Decker Watch - For Men (End of Season Style)",
                "description": "To register this product for the warranty, the customer has to visit www.fossilcare.com and mention the 'Internet Purchase' option and then select the 'Flipkart' option on the drop-down. While availing the warranty, they need to call the toll-free number that's on www.fossilcare.com. The product has to be registered if the user wants to claim the warranty.The Size of the Dial may be Bigger than what is shown in Image. The watch will be Delivered in a Plastic Box and the Brand Box will come Separately with the same Shipment",
                "price": "599.99",
                "brand_name": "fossil",
                "netweight": "175g",
                "image_url": "https://rukminim1.flixcart.com/image/312/312/watch/z/k/e/ch2647-fossil-original-imadje2whf6z8ygv.jpeg?q=70",
                "keywords": "watch,fossil"
            },
            {
                "short_name": "Fresho Bread - Brown, Chemical Free, 400 gm",
                "description": "Brown bread made from whole wheat flour and not enriched flour. It is high on fibre and its colour comes from a mixture of flours. Its great tasting and goes well with all types of sandwiches.",
                "price": "0.99",
                "brand_name": "FRESHO",
                "netweight": "400gm",
                "image_url": "https://www.bigbasket.com/media/uploads/p/s/40013625_2-fresho-bread-brown-chemical-free.jpg",
                "keywords": "bread, brown bread"
            },
            {
                "short_name": "Fresho Bread - Brown, Chemical Free, 400 gm",
                "description": "Brown bread made from whole wheat flour and not enriched flour. It is high on fibre and its colour comes from a mixture of flours. Its great tasting and goes well with all types of sandwiches.",
                "price": "0.99",
                "brand_name": "FRESHO",
                "netweight": "400gm",
                "image_url": "https://www.bigbasket.com/media/uploads/p/s/40013625_2-fresho-bread-brown-chemical-free.jpg",
                "keywords": "bread, brown bread"
            }
        ];

        const nlpKB = [
            {
                "classifier": "logout",
                "keyword": "logout"
            },
            {
                "classifier": "log out",
                "keyword": "logout"
            },
            {
                "classifier": "log me out",
                "keyword": "logout"
            },
            {
                "classifier": "bye",
                "keyword": "logout"
            },
            {
                "classifier": "bye bye",
                "keyword": "logout"
            },
            {
                "classifier": "sign off",
                "keyword": "logout"
            },
            {
                "classifier": "sign out",
                "keyword": "logout"
            },
            {
                "classifier": "sign me out",
                "keyword": "logout"
            },
            {
                "classifier": "log off",
                "keyword": "logout"
            },
            {
                "classifier": "log me off",
                "keyword": "logout"
            },
            {
                "classifier": "Search watches",
                "keyword": "watch"
            },
            {
                "classifier": "Find me watches",
                "keyword": "watch"
            },
            {
                "classifier": "how about some watches?",
                "keyword": "watch"
            },
            {
                "classifier": "watches",
                "keyword": "watch"
            },
            {
                "classifier": "show me watches",
                "keyword": "watch"
            },
            {
                "classifier": "find me cereals",
                "keyword": "breakfast cereal"
            },
            {
                "classifier": "show me cereals",
                "keyword": "breakfast cereal"
            },
            {
                "classifier": "search cereals",
                "keyword": "breakfast cereal"
            },
            {
                "classifier": "find cereals",
                "keyword": "breakfast cereal"
            },
            {
                "classifier": "how about some watches",
                "keyword": "breafast cereal"
            },
            {
                "classifier": "find hand soap",
                "keyword": "hand soap"
            },
            {
                "classifier": "search hand soap",
                "keyword": "hand soap"
            },
            {
                "classifier": "show me hand soaps",
                "keyword": "hand soap"
            },
            {
                "classifier": "how about some hand soap",
                "keyword": "hand soap"
            },
            {
                "classifier": "bread spread",
                "keyword": "bread spread"
            },
            {
                "classifier": "find me bread spread",
                "keyword": "bread spread"
            },
            {
                "classifier": "find me nutella",
                "keyword": "nutella"
            },
            {
                "classifier": "find some wine",
                "keyword": "wine"
            },
            {
                "classifier": "suggest me some wine",
                "keyword": "wine"
            },
            {
                "classifier": "show me some wines",
                "keyword": "wine"
            },
            {
                "classifier": "can you find some wine",
                "keyword": "wine"
            },
            {
                "classifier": "show me my last orders",
                "keyword": "purchaseHistory"
            },
            {
                "classifier": "what did I order last time",
                "keyword": "purchaseHistory"
            },
            {
                "classifier": "show me my purchase history",
                "keyword": "purchaseHistory"
            },
            {
                "classifier": "purchase history",
                "keyword": "purchaseHistory"
            },
            {
                "classifier": "show me purchase history",
                "keyword": "purchaseHistory"
            },
            {
                "classifier": "near by collect and go outlet",
                "keyword": "stores"
            },
            {
                "classifier": "find stores near me",
                "keyword": "stores"
            },
            {
                "classifier": "search stores near by",
                "keyword": "stores"
            },
            {
                "classifier": "search stores near me",
                "keyword": "stores"
            },
            {
                "classifier": "stores near me",
                "keyword": "stores"
            }
        ];

        const storeData = [
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "kondapur",
                "opentime": "10:00",
                "closetime": "17:00",
                "geolocation": "17.443142 | 78.381303"
            },
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "madhapur",
                "opentime": "09:00",
                "closetime": "17:00",
                "geolocation": "17.420869 | 78.790544"
            },
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "gachibowli",
                "opentime": "10:00",
                "closetime": "18:00",
                "geolocation": "17.420869 | 78.790555"
            },
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "ORR",
                "opentime": "10:00",
                "closetime": "17:00",
                "geolocation": "17.420870 | 78.790544"
            },
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "opel",
                "opentime": "10:00",
                "closetime": "20:00",
                "geolocation": "17.420872 | 78.790645"
            },
            {
                "store_id": "1",
                "name": "collect n go",
                "address": "kukkatpalli",
                "opentime": "10:00",
                "closetime": "17:00",
                "geolocation": "17.420940 | 78.790655"
            }
        ];
        return { products, nlpKB , storeData};
    }
}