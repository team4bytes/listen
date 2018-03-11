import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../products/products';
import {productData} from './product-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products = productData; 

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