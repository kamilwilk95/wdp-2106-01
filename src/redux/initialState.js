const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 4,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldprice: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldprice: 50,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      photo:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      photo:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      myStarsChoice: 0,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      photo:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      photo:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      photo:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      photo:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      photo:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      photo: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addedToCompare: false,
    },
  ],
  cart: {
    products: [],
  },
  brands: [
    {
      id: 1,
      src:
        'https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203_1280.jpg',
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg',
    },
    {
      id: 3,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 4,
      src: 'https://cdn.pixabay.com/photo/2016/11/29/08/43/blank-1868502_1280.jpg',
    },
    {
      id: 5,
      src: 'https://cdn.pixabay.com/photo/2015/12/08/00/26/desk-1081708_1280.jpg',
    },
    {
      id: 6,
      src:
        'https://images.pexels.com/photos/2082095/pexels-photo-2082095.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 7,
      src:
        'https://images.pexels.com/photos/6045341/pexels-photo-6045341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 8,
      src: 'https://cdn.pixabay.com/photo/2016/11/29/08/43/blank-1868502_1280.jpg',
    },
    {
      id: 9,
      src:
        'https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203_1280.jpg',
    },
    {
      id: 10,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 11,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 12,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 13,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 14,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 15,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 16,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 17,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
    {
      id: 18,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
  ],

  promotion: {
    leftImage:
      'https://media.istockphoto.com/photos/interior-with-armchair-and-coffee-table-3d-rendering-picture-id1158575634?k=6&m=1158575634&s=612x612&w=0&h=Fkh9dLz9W8TKkKwJstagndsCu92badT0y6m-w8iqB-g=',
    leftDescription: ['Guest room', 'Sofa', '-20%'],
    rightUpImage:
      'https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg',
    rightUpDescription: ['Office', 'chair', 'Collection', '$200.00'],
    rightDownImage:
      'https://media.istockphoto.com/photos/interior-of-modern-living-room-with-white-fabric-sofa-over-blue-wall-picture-id1136363292?k=6&m=1136363292&s=612x612&w=0&h=4DjPA8KlSLP6l75B7Bh0zZXbmTjjYLS5KThkvDn86Rs=',
    rightDownDescription: ['Special', 'collection', 'Save up', '45%', 'of furniture'],
  },

  feedbacks: [
    {
      id: 'feedback1',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      photo: '',
      name: 'John Doe',
      description: 'Furniture client',
    },
    {
      id: 'feedback2',
      text:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      photo: '',
      name: 'John Smith',
      description: 'New bed owner',
    },
    {
      id: 'feedback3',
      text:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      photo: '',
      name: 'Kristoff Koloski',
      description: 'Kitchen designer',
    },
  ],
  blog: [
    {
      id: 1,
      name: 'Products that fight static',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '15 Jan 2016',
      comments: '4 comments',
    },
    {
      id: 2,
      name: 'Products that fight static',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '15 Jan 2016',
      comments: '4 comments',
    },
    {
      id: 3,
      name: 'Products that fight static',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '15 Jan 2016',
      comments: '4 comments',
    },
  ],
  gallery: [
    {
      sectionName: 'Features',
      name: 'Aenean Ru Bristique 2',
      stars: 2,
      priceActuall: '$150.00',
      priceTop: '$110.00',
      advImgs: [
        {
          pic:
            'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          active: true,
        },
        {
          pic:
            'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 2,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 7,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 8,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 10,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 11,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/4846106/pexels-photo-4846106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 12,
          active: false,
        },
      ],
    },
    {
      sectionName: 'Top seller',
      name: 'Aenean Ru Bristique 1',
      stars: 2,
      priceActuall: '$160.00',
      priceTop: '$120.00',
      advImgs: [
        {
          pic:
            'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          active: true,
        },
        {
          pic:
            'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/4846106/pexels-photo-4846106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          active: false,
        },
        {
          pic: 'https://i.ibb.co/b7m6BP3/pexels-cats-coming-707579-1.jpg',
          id: 5,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 7,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 8,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 10,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 11,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 12,
          active: false,
        },
      ],
    },
    {
      sectionName: 'Sale off',
      name: 'Aenean Ru Bristique 3',
      stars: 2,
      priceActuall: '$180.00',
      priceTop: '$100.00',
      advImgs: [
        {
          pic:
            'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          active: true,
        },
        {
          pic:
            'https://images.pexels.com/photos/4846086/pexels-photo-4846086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/5825695/pexels-photo-5825695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 7,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 8,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 10,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 11,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198652/pexels-photo-6198652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 12,
          active: false,
        },
      ],
    },
    {
      sectionName: 'Top rated',
      name: 'Aenean Ru Bristique 4',
      stars: 2,
      advImgs: [
        {
          pic:
            'https://images.pexels.com/photos/6312072/pexels-photo-6312072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          active: true,
        },
        {
          pic:
            'https://images.pexels.com/photos/6480202/pexels-photo-6480202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198652/pexels-photo-6198652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6143349/pexels-photo-6143349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 4,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6580232/pexels-photo-6580232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 5,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6585622/pexels-photo-6585622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 6,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 7,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 8,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 9,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 10,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 11,
          active: false,
        },
        {
          pic:
            'https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 12,
          active: false,
        },
      ],
    },
  ],
  promo: [
    {
      id: 1,
      src:
        'https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203_1280.jpg',
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg',
    },
    {
      id: 3,
      src: 'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg',
    },
  ],
  deals: [
    {
      id: 1,
      src:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      id: 2,
      src:
        'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 3,
      src:
        'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
};

export default initialState;
