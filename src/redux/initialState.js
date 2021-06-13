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
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldprice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldprice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
      photo: 'https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image:
        'https://slf24.pl/media/catalog/product/cache/2a0d5d216088f6eaf94f4becefa43ad1/d/u/ducon_kronos_14_2__1.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      image: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947__340.jpg',
      price: 30,
      newFurniture: true,
      favourite: false,
      addToCompare: false,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
