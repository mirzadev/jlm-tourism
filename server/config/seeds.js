const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Destination' },
    { name: 'Educational' },
    { name: 'Entertainment' },
    { name: 'Historical' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Miami Art Deco',
      description:
        'Miami’s Art Deco Historic District boasts colorful buildings, interesting décor elements, intricate details and a century-old history that offers a glimpse into a bygone era. It is located at: "1001 Ocean Dr, Miami Beach, FL 33139" ',
      image: 'miami-art-deco.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 20
    },
    {
      name: 'Miami Beach',
      description:
        'Miami Beach has a rich history as a trend setting cultural center, from the world famous nightclubs of the 50’s, to today’s modern South Beach. The City of Miami Beach’s identity is intrinsically linked to the arts, and today our entertainment, production and arts communities are stronger than ever. It is located at: "1344 Ocean Dr, Miami Beach, FL, 33139" ',
      image: 'miami-beach.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 100
    },
    {
      name: 'Naples Pier',
      category: categories[0]._id,
      description:
        'The historic Naples Pier is located on the Gulf of Mexico at the West end of 12th Avenue South. The Naples Pier is a favorite location for sightseers. The Pier features restrooms, showers, a concession stand with covered eating area, and beach supplies. It is located at: "25 12th Ave S, Naples, FL, 34102". ',
      image: 'naples-pier.jpg',
      price: 109.99,
      quantity: 20
    },
    {
      name: 'Southernmost Point at Key West',
      category: categories[0]._id,
      description:
        'A colorful landmark buoy and spectacular sunsets make the southernmost spot in the Continental U.S. a special place to visit. It is located at: "Whitehead St & South St, Key West, FL, 33040". ',
      image: 'southernmost-point.jpg',
      price: 149.99,
      quantity: 50
    },
    {
      name: 'Star Island in Miami',
      category: categories[0]._id,
      description:
        'Star Island is a neighborhood in the city of Miami Beach on a man-made island in Biscayne Bay, Florida, United States. The island is south of the Venetian Islands and just east of Palm and Hibiscus islands. Most of the celebrities in the world have a house in this island that made is so famous. You can enjoy the beauty of Star Island taking a boat trip. It is located at: "401 Biscayne Blvd Miami, FL 33132". ',
      image: 'star-island.jpg',
      price: 74.99,
      quantity: 50
    },
    {
      name: 'Everglades National Park',
      category: categories[1]._id,
      description:
        'The largest subtropical wilderness in the United States, Everglades National Park protects and unparalleled landscape filled with curious flora and fauna. At nearly 1.5 million acres in size, the park provides important habitat for numerous rare and endangered spices like the manatee, American Crocodile, and the elusive Florida Panther. It is located at: "40001 State Road 9336, Homestead, FL 33034".',
      image: 'everglades-national-park.jpg',
      price: 119.99,
      quantity: 20
    },
    {
      name: 'Frost Science Musium',
      category: categories[1]._id,
      description:
        'Frost Science Museum is accredited by the American Association of Museums and is an affiliate of the Smithsonian Institution.It is one of the best place to know about the science. It is located at: "1101 Biscayne Blvd, Miami, FL 33132".',
      image: 'frost-science-museum.jpg',
      price: 89.99,
      quantity: 20
    },
    {
      name: 'Kennedy Space Center',
      category: categories[1]._id,
      description:
        "Kennedy Space Center, one of 10 NASA field centers, is a premier multi-user spaceport with more than 90 private-sector partners and nearly 250 partnership agreements. The presence of commercial companies at NASA's Kennedy Space Center is larger than ever before, enabling us to embark on a new era of space exploration. Don't miss the experience of meeting live astronomars and space engineers. It is located at: 'Space Commerce Way, Merritt Island, FL 32953' ",
      image: 'kennedy-space-center.jpg',
      price: 149.99,
      quantity: 30
    },
    {
      name: 'Miami Seaquarium',
      category: categories[1]._id,
      description: 'Miami Seaquarium is committed to wildlife conservation, including the rescue and rehabilitation of manatees and sea turtles. On a 38-acre tropical paradise with spectacular skyline views lies a South Florida attraction like no other. You will enjoy every moments of your time at Miami Seaquarium. It is licated at: "4400 Rickenbacker Causeway, Miami, FL 33149". ',
      image: 'miami-seaquarium.jpg',
      price: 79.99,
      quantity: 30
    },
    {
      name: 'Orlando Science Center',
      category: categories[1]._id,
      description:
        'Orlando Science Center is a glistening structure that looks like the product of a meeting between Greek-Roman architects and Star Trek engineers.The museum strives to teach kids (and adults) about classical science using modern, hands-on, sometimes high-tech activities. It is located at: "777 E Princeton St, Orlando, FL, 32803". ',
      image: 'orlando-science-center.jpg',
      price: 109.99,
      quantity: 30
    },
    {
      name: 'Walt Disney World',
      category: categories[2]._id,
      description:
        "Walt Disney World is an entertainment resort complex in Bay Lake and Lake Buena Vista, Florida, United States, near the cities of Orlando and Kissimmee. The resort comprises four theme parks (Magic Kingdom, Epcot, Disney's Hollywood Studios, and Disney's Animal Kingdom), two water parks (Disney's Blizzard Beach and Disney's Typhoon Lagoon), 27 themed resort hotels, nine non-Disney hotels, several golf courses, a camping resort, and other entertainment venues, including the outdoor shopping center Disney Springs. It is located at:'1180 Seven Seas Drive, Lake Buena Vista, FL 32830'. ",
      image: 'walt-disney-world.jpg',
      price: 189.99,
      quantity: 30
    },
    {
      name: 'Universal Studio',
      category: categories[2]._id,
      description:
        'Universal Studios Florida is a theme park located in Orlando, Florida. Primarily themed to movies, television, and other aspects of the entertainment industry.It ranked eleventh in the world and sixth in North America for attendance among amusement parks in 2019, hosting approximately 10.9 million visitors. It is located at: "7000 Universal Blvd. Orlando, FL 32819". ',
      image: 'universal-studios.jpg',
      price: 179.99,
      quantity: 30
    },
    {
      name: 'Detona International Speedway',
      category: categories[2]._id,
      description:
        'Daytona International Speedway is a race track in Daytona Beach, Florida, United States. Since opening in 1959, it has been the home of the Daytona 500, the most prestigious race in NASCAR as well as its season opening event. In addition to NASCAR, the track also hosts races of ARCA, AMA Superbike, IMSA, SCCA, and Motocross. It is located at: "1801 West International Speedway Boulevard, Daytona Beach, FL 32114". ',
      image: 'daytona-international-speedway.jpg',
      price: 139.99,
      quantity: 30
    },
    {
      name: 'Busch Garden',
      category: categories[2]._id,
      description:
        'Busch Gardens is the name of two amusement parks in the United States, owned and operated by SeaWorld Parks & Entertainment in Tampa, Florida. It is located at: "10165 McKinley Dr, Tampa, FL 33612". ',
      image: 'busch-gardens.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Aquatica',
      category: categories[2]._id,
      description:
        'Aquatica is a famous water parks owned and operated by SeaWorld Parks & Entertainment. Aquatica parks are operating in Orlando, Florida. It is located at: "5800 Water Play Way, Orlando, FL 32821".  ',
      image: 'aquatica.jpg',
      price: 89.99,
      quantity: 30
    },
    {
      name: 'Castillo de San Marcos',
      category: categories[3]._id,
      description:
        'Standing guard at Old San Juan’s eastern gate is Castillo San Cristóbal. Built to protect San Juan against land attacks, the ancient Spanish fort is now part of the San Juan National Historic Site. It is the largest Spanish fortification built in the New World and offers spectacular views of the bay and nearby Castillo San Felipe. It is located at: "1 S Castillo Dr, St. Augustine, FL 32084".',
      image: 'castillo-de-san-marcos.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Ernest Hemingway Museum',
      category: categories[3]._id,
      description:
        'The Ernest Hemingway House was the residence of American writer Ernest Hemingway in the 1930s. The house is situated on the island of Key West in Florida. It is located at: "907 Whitehead St, Key West, FL 33040". ',
      image: 'ernest-hemingway-museum.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Flagler Museum',
      category: categories[3]._id,
      description:
        'Flagler is a 75-room, 100,000 square foot Gilded Age mansion open to the public in Palm Beach, Florida in the United States. Completed in 1902, it is a major example of neoclassical Beaux Arts architecture designed by Carrère and Hastings for Henry Flagler, a leading captain of industry in the late 19th century, and a leading developer of Florida as a tourist destination. The building is listed[4] a National Historic Landmark. It is located at"1 Whitehall Way, Palm Beach, FL 33480". ',
      image: 'flagler-museum.jpg',
      price: 69.99,
      quantity: 30
    },
    {
      name: 'Gold Coast Railroad Museum',
      category: categories[3]._id,
      description:
        'The Gold Coast Railroad Museum is one of three Official State Railroad Museums in Florida.[2] It became a Florida state railroad museum in 1984 when it received statutory recognition by the Florida Legislature as meeting the four statutory criteria that: its purpose is to preserve railroad history, it is devoted primarily to the history of railroading, it is open to the public, and it operates as a non-profit organization. It is located at: "12450 SW 152nd St, Miami, FL 33177". ',
      image: 'gold-coast-railroad-museum.jpg',
      price: 49.99,
      quantity: 50
    },
    {
      name: 'Ponce de Leon Lighthouse',
      category: categories[3]._id,
      description:
        'The Ponce de Leon Inlet Light is a lighthouse and museum located at Ponce de León Inlet in Central Florida.It is 175 feet (53 m) in height, which is the tallest lighthouse in the state and one of the tallest in the United States. It is located at: "4931 S Peninsula Dr, Ponce Inlet, FL 32127".  ',
      image: 'ponce-de-leon-lighthouse.jpg',
      price: 1199.99,
      quantity: 30
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Mirza',
    lastName: 'Miami',
    email: 'mirza@yahoo.com.com',
    password: 'test123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Awal',
    lastName: 'Junior',
    email: 'awal@aol.com',
    password: 'test123'
  });

  console.log('users seeded');

  process.exit();
});
