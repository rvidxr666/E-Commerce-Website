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




if __name__ == "__main__":
    conn, curr = create_connection()
    status = insert_data(curr, conn)
    # delete_data(curr, conn)