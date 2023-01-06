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
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    }, 
    {
        "id": 3, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    }, 
    {
        "id": 4, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity": 3
    }, 
    {
        "id": 5, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    },
    {
        "id": 6, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    }, 
        {
        "id": 7, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity":3
    },
    {
        "id": 8, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "price": 300,
        "quantity": 3
    },
    {
        "id": 9, 
        "name": "Bitch Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "auto",
        "price": 300,
        "quantity": 3
    },
    {
        "id": 10, 
        "name": "Bitch Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "clothing",
        "price": 300,
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
                )
    
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
    print(insert_data(curr, conn))
    print(insert_categories(curr, conn))
    # delete_data(curr, conn)