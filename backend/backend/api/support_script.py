import mysql.connector as cn


data = [{
        "id": 1, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    }, 
    {
        "id": 2, 
        "name": "Bronson Bearings",
        "header": "Bronson Bearings", 
        "full_description": "very tight",
        "header_image": "https://skateshop.pl/eng_pl_BRONSON-RAW-BEARINGS-1KPL-1152939644_1.jpg",
        "category_id": "skate",
        "price": 40,
        "quantity":3
    }, 
    {
        "id": 3, 
        "name": "Moondust Griptape",
        "header": "Moondust Griptape", 
        "full_description": "Don’t trip: the Moondust Grip Tape features geometric third eye graphics stamped across the top designed by ELEMENT’s very own art director, Bryan Arii. Developed with our decades of industry experience, this grip puts performance first.",
        "header_image": "https://skateshop.pl/eng_pl_ELEMENT-Moondust-griptape-1152939863_1.jpg",
        "category_id": "skate",
        "price": 13.33,
        "quantity":3
    }, 
    {
        "id": 4, 
        "name": "8.5 Girl Deck",
        "header": "8.5 Girl Deck", 
        "full_description": "Girl Deck 8.5 size",
        "header_image": "https://skateshop.pl/eng_pl_-1152940691_1.webp",
        "category_id": "skate",
        "price": 300,
        "quantity": 3
    }, 
    {   
        "id": 5,
        "name": "Adidas Puig Shoes",
        "header": "Adidas Puig Shoes", 
        "full_description": "Adidas Puig Shoes",
        "header_image": "https://static.super-shop.com/1376661-undefined.jpg?w=960",
        "category_id": "clothing",
        "price": 96,
        "quantity": 3
    },
    {   
        "id": 6,
        "name": "Nervous Pants",
        "header": "Nervous Pants", 
        "full_description": "Loose pants from Nervous Strong Company in the style of Work Pants with additional elements to which you can attach the necessary tools.",
        "header_image": "https://skateshop.pl/eng_pl_Nervous-Carpenter-Work-Green-Pants-1152940650_1.webp",
        "category_id": "clothing",
        "price": 111,
        "quantity": 3
    },
    {   
        "id": 7,
        "name": "Thrasher Cap",
        "header": "Thrasher Cap", 
        "full_description": "Thrasher Cap",
        "header_image": "https://skateshop.pl/eng_pl_-1152940569_1.webp",
        "category_id": "clothing",
        "price": 31,
        "quantity": 3
    },
    {   
        "id": 8,
        "name": "Hoodie Thrasher",
        "header": "Hoodie Thrasher", 
        "full_description": "Hoodie Thrasher",
        "header_image": "https://skateshop.pl/eng_pl_-1152940574_1.webp",
        "category_id": "clothing",
        "price": 86,
        "quantity": 3
    },
    {   
        "id": 9,
        "name": "Vans Socks",
        "header": "Vans Socks", 
        "full_description": "Vans Socks",
        "header_image": "https://skateshop.pl/eng_pl_VANS-Smartwool-Targeted-Cushion-grape-leaf-snowboard-socks-1152940263_1.jpg",
        "category_id": "clothing",
        "price": 23,
        "quantity": 3
    },
    {   
        "id": 10,
        "name": "122892 Mobil Delvac Synthetic Diesel 0W40 Oil, 3.78-L",
        "header": "122892 Mobil Delvac Synthetic Diesel 0W40 Oil, 3.78-L", 
        "full_description": "Mobil Delvac Synthetic Diesel",
        "header_image": "https://cdn.shopify.com/s/files/1/2239/4255/products/0289938_1_1800x1800.jpg?v=1575678078",
        "category_id": "auto",
        "price": 300,
        "quantity": 3
    },
    {   
        "id": 11,
        "name": "Motul Snowpower 2T",
        "header": "Motul Snowpower 2T", 
        "full_description": "Motul Snowpower 2T",
        "header_image": "https://cdn.shopify.com/s/files/1/2239/4255/products/028-8760_539x833.png?v=1637793134",
        "category_id": "auto",
        "price": 52.99,
        "quantity": 3
    },
    {   
        "id": 12,
        "name": "DXAE80CA DEWALT30A",
        "header": "DXAE80CA DEWALT30A", 
        "full_description": "DXAE80CA DEWALT30A",
        "header_image": "https://cdn.shopify.com/s/files/1/2239/4255/products/0111922_1_22013c90-299c-40b6-8e33-39073f27f2bc_1800x1800.jpg?v=1575685056",
        "category_id": "auto",
        "price": 62.99,
        "quantity": 3
    },
    {   
        "id": 13,
        "name": "0111983 NOCO",
        "header": "0111983 NOCO", 
        "full_description": "DXAE80CA DEWALT30A",
        "header_image": "https://cdn.shopify.com/s/files/1/2239/4255/products/nocogenius5_1800x1800.png?v=1616074210",
        "category_id": "auto",
        "price": 96.99,
        "quantity": 3
    },
]



categories = [
                (
                    "skate", 
                    "Skate Boarding Gear",
                    "https://i.guim.co.uk/img/media/beb8ffcaefcecc9b9b25bd8b0db545d9f8aef61d/200_0_6648_3990/master/6648.jpg?width=1200&quality=85&auto=format&fit=max&s=65554f88940a4a6ed1ac498997346f51"
                ), 

                (
                    "auto", 
                    "Auto Parts",
                    "https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/Mulliner%20Batur%201920x1080.jpg/_jcr_content/renditions/original.image_file.1920.1080.file/Mulliner%20Batur%201920x1080.jpg"
                ), 

                (
                    "clothing",
                    "Clothes",
                    "https://blog.japanwondertravel.com/wp-content/uploads/2021/10/Japanese-clothing-store.jpg"
                ), 
    
             ]


def create_connection():

    conn = cn.connect(
        host="localhost",
        user="root",
        password="root",
        database="ecommerce",
        port=4321
    )

    curr = conn.cursor()

    return conn, curr


def insert_data(curr, conn):
    sql = "INSERT INTO products (name, header, full_description, header_image, category_id, price, quantity) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    parsed_data = [tuple(dic.values())[1:] for dic in data]
    print(parsed_data)
    curr.executemany(sql, parsed_data)
    conn.commit()

    return "OK"


def delete_data(curr, conn):
    sql = "DELETE FROM products"
    curr.execute(sql)
    conn.commit()

    curr.execute("ALTER TABLE products AUTO_INCREMENT=1")
    conn.commit()

    return "DELETED"

def insert_categories(curr, conn):
    sql = "INSERT INTO categories (category, description, picture_url) VALUES (%s, %s, %s)"
    curr.executemany(sql, categories)
    conn.commit()
    return "ADDED CATEGORIES"

def delete_categories(curr, conn):
    sql = "DELETE FROM categories"
    curr.execute(sql)
    conn.commit()
    return "DELETED CATEGORIES"





if __name__ == "__main__":
    conn, curr = create_connection()
    # print(insert_data(curr, conn))
    # print(insert_categories(curr, conn))
    # delete_data(curr, conn)
    # print(delete_categories(curr, conn))