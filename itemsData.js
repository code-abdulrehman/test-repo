import { getProductImageUrl, getBannerImageUrl } from './constants.js';

const itemsData = [
  {
    "product_id": "earbuds-ast-g1",
    "title": "AST-G1",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G1 Gold Series G-1 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2100,
    "current_price": 3500,
    "discount_percentage": 40,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g1.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g1.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g1.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g1.webp"
    ],
    "product_stock": 150,
    "reviews": 1247,
    "ratings": 4.8,
    "product_colors": [
      "Black",
      "White",
      "Gold"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2025-04-30T19:00:00.000Z",
    "featured": true,
    "specs": {
      "wireless_version": "V5.4",
      "wireless_range": ">10m",
      "music_time": "4.5h (Volume 60%)",
      "talk_time": "3.5h",
      "frequency_response": "20 HZ - 20 KHZ",
      "battery": "300mAh",
      "cell_voltage": "5V",
      "standby_time": "30 Days",
      "cell_life": "500 Times",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g2",
    "title": "AST-G2",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G2 Gold Series G-2 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2100,
    "current_price": 3200,
    "discount_percentage": 34,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g2.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g2.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g2.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g2.webp"
    ],
    "product_stock": 75,
    "reviews": 92,
    "ratings": 3.7,
    "product_colors": [
      "Black"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-02",
    "shipping": true,
    "featured": true,
    "specs": {
      "wireless_version": "V5.0",
      "wireless_range": ">10m",
      "earbud_battery": "35mAh",
      "music_time": "4.5 - 5.5h",
      "frequency_response": "20 HZ - 20 KHZ",
      "sensitivity": "93 ÃÂ± 3dB",
      "battery": "300mAh",
      "cell_voltage": "3.7V",
      "standby_time": "30 Days",
      "cell_life": ">300 Times",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g3",
    "title": "AST-G3",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G3 Gold Series G-3 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2400,
    "current_price": 3400,
    "discount_percentage": 29,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g3.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g3.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g3.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g3.webp"
    ],
    "product_stock": 200,
    "reviews": 19,
    "ratings": 2.6,
    "product_colors": [
      "Black",
      "Blue",
      "Red"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-03",
    "specs": {
      "wireless_version": "V5.2",
      "wireless_range": ">10m",
      "earbud_battery": "35mAh",
      "music_time": "4 - 5h",
      "frequency_response": "20 HZ - 20 KHZ",
      "sensitivity": "-42dB ÃÂ± 3dB",
      "battery": "250mAh",
      "cell_voltage": "3.7V",
      "standby_time": "30 Days",
      "charging_time": "1 - 1.5h",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g4",
    "title": "AST-G4",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G4 Gold Series G-4 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2300,
    "current_price": 4000,
    "discount_percentage": 43,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g4.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g4.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g4.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g4.webp"
    ],
    "product_stock": 80,
    "reviews": 19,
    "ratings": 4.7,
    "product_colors": [
      "Black",
      "Red"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-04",
    "specs": {
      "wireless_version": "V5.4",
      "wireless_range": ">10m",
      "music_time": "4.5h (Volume 60%)",
      "talk_time": "3.5h",
      "frequency_response": "20 HZ - 20 KHZ",
      "battery": "300mAh",
      "cell_voltage": "5V",
      "standby_time": "30 Days",
      "cell_life": "500 Times",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g5",
    "title": "AST-G5",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G5 Gold Series G-5 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2350,
    "current_price": 3600,
    "discount_percentage": 35,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g5.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g5.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g5.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g5.webp"
    ],
    "product_stock": 300,
    "reviews": 92,
    "ratings": 1.5,
    "product_colors": [
      "Black",
      "Blue",
      "Green"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-05",
    "featured": false,
    "specs": {
      "wireless_version": "V5.3",
      "wireless_range": "10 - 15 m",
      "music_time": "10h",
      "impedance": "32 Q",
      "sensitivity": "101 ÃÂ± 3dB",
      "battery": "350mAh",
      "cell_voltage": "3.7V",
      "standby_time": "30 Days",
      "charging_time": "1.5h",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g6",
    "title": "AST-G6",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G6 Gold Series G-6 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2250,
    "current_price": 3500,
    "discount_percentage": 36,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g6.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g6.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g6.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g6.webp"
    ],
    "product_stock": 250,
    "reviews": 89,
    "ratings": 5,
    "product_colors": [
      "Black",
      "Red",
      "Gray"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-06",
    "specs": {
      "wireless_version": "V5.4",
      "music_time": "120h (With Power Bank)",
      "impedance": "32 Q",
      "sensitivity": "101 ÃÂ± 3dB",
      "battery": "300mAh",
      "cell_voltage": "3.7V",
      "standby_time": "30 Days",
      "charging_time": "1.5h",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g7",
    "title": "AST-G7",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G7 Gold Series G-7 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2300,
    "current_price": 3200,
    "discount_percentage": 28,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g7.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g7.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g7.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g7.webp"
    ],
    "product_stock": 120,
    "reviews": 71,
    "ratings": 4.6,
    "product_colors": [
      "Black",
      "White",
      "Pink"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Normal",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-07",
    "shipping": true,
    "specs": {
      "music_time": "50h (With Power Bank)",
      "impedance": "32 Q",
      "sensitivity": "101 ÃÂ± 3dB",
      "battery": "300mAh",
      "cell_voltage": "3.7V",
      "standby_time": "25 Days",
      "charging_time": "1h",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g8",
    "title": "AST-G8",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G8 Gold Series G-8 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2450,
    "current_price": 4500,
    "discount_percentage": 46,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g8.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g8.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g8.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g8.webp"
    ],
    "product_stock": 100,
    "reviews": 100,
    "ratings": 4.5,
    "product_colors": [
      "Black",
      "White"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Gaming",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-08",
    "featured": true,
    "specs": {
      "wireless_version": "V5.4",
      "wireless_range": ">10m",
      "earbuds_charging_input": "DC5V/20ma",
      "earbud_battery": "35mAh",
      "music_time": "5.5h (Volume 70%)",
      "talk_time": "5h (Volume 70%)",
      "battery": "250mAh",
      "input_current": "5v/180mA",
      "standby_time": "2000h",
      "charging_time": "1.1h",
      "usb": "Type-C"
    }
  },
  {
    "product_id": "earbuds-ast-g9",
    "title": "AST-G9",
    "description": "True Wireless Sterea. Hi-Fi Audio, 100%ENC",
    "sr_only_description": "AST-G9 Gold Series G-9 wireless earbuds deliver premium Hi-Fi audio with advanced 100% Environmental Noise Cancellation for crystal-clear calls and music. Experience cutting-edge wireless technology, long battery life, and a stylish designÃ¢ÂÂperfect for music lovers and professionals seeking top-tier sound and comfort.",
    "discount_price": 2299,
    "current_price": 4200,
    "discount_percentage": 45,
    "product_feature_img": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/ast-g9.webp",
    "banner_image": "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/banners/main-banner.webp",
    "product_images": [
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts/ast-g9.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/posts-2/ast-g9.webp",
      "https://cdn.jsdelivr.net/gh/ast03066223005/ast-assets@main/public/ast/products/pack/ast-g9.webp"
    ],
    "product_stock": 80,
    "reviews": 12,
    "ratings": 4.5,
    "product_colors": [
      "Black",
      "Blue"
    ],
    "category": "Electronics",
    "series": "AST-G",
    "mood": "Gaming",
    "keywords": [
      "wireless",
      "earbuds",
      "audio"
    ],
    "made_country": "China",
    "creation_date": "2024-05-09",
    "featured": false,
    "specs": {
      "wireless_version": "V5.3",
      "wireless_range": "12m",
      "earbuds_charging_input": "DC5V/25ma",
      "earbud_battery": "25mAh",
      "music_time": "4.5h (Volume 70%)",
      "talk_time": "4h (Volume 70%)",
      "battery": "200mAh",
      "input_current": "5v/280mA",
      "standby_time": "3000h",
      "charging_time": "80min",
      "charge_times_case_to_earbuds": "3 time",
      "usb": "Type-C"
    }
  }
];

export default itemsData;