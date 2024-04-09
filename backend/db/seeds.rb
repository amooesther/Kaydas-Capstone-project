# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#Create 10 random Users

   
user1=User.create(first_name: "lucy", last_name: "ken", email: "lucy@ken", password: "1234", shipping_address: "Nairobi")
user2=User.create(first_name: "kante", last_name: "john", email: "kante@john", password: "5567", shipping_address: "Nakuru")
user3=User.create(first_name: "james", last_name: "mayor", email: "james@mayor", password: "2346", shipping_address: "Malindi")
user4=User.create(first_name: "mary", last_name: "ken", email: "mary@ken", password: "7777", shipping_address: "Nairobi")
user5=User.create(first_name: "otieno", last_name: "john", email: "otieno@john", password: "6775", shipping_address: "Nairobi")
user6=User.create(first_name: "olivia", last_name: "musa", email: "olivia@musa", password: "8991", shipping_address: "Nairobi")
user7=User.create(first_name: "kenny", last_name: "mtoya", email: "kenny@mtoya", password: "1834", shipping_address: "Malindi")
user8=User.create(first_name: "wambui", last_name: "jess", email: "wambui@jess", password: "1734", shipping_address: "Nairobi")
user9=User.create(first_name: "idah", last_name: "kamau", email: "idah@kamau", password: "1934", shipping_address: "Mombasa")
user10=User.create(first_name: "amina", last_name: "ahmed", email: "amina@ahmed", password: "1034", shipping_address: "Nairobi")



#create categories
category1=Category.create(
name: "Beef"

)

category2=Category.create(
name: "Chicken"

)
category3=Category.create(
name: "Fish"

)


#creating 20 random Cars 
product1=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)

product2=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product3=Product.create(
name:"Tilapia",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"fish"
)
product4=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product5=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product6=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product7=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product8=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product9=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)
product10=Product.create(
name:"Chicken Breast",
description:"This is a test description for chicken breast",
image_url: "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
price:"120",
stock: "5",
temperature_requirement:"13.5 degrees",
weight: "500 g",
category:"Chicken"
)




