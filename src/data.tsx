import { v4 as uuid } from 'uuid'

export type Data = {
  id: string,
  name: string,
  category: string,
  image: string,
  price: number,
  quantity: number
}

let data: Data[] = [
  {
    id: uuid(),
    name: 'lemon grass',
    category: 'vegetable',
    image:'lemongrass.jpg',
    price: 2,
    quantity: 10
  },
  {
    id: uuid(),
    name: 'carrot',
    category: 'vegetable',
    image:'carrot.jpg',
    price: 2,
    quantity: 2
  },
  {
    id: uuid(),
    name: 'leek',
    category: 'vegetable',
    image:'leek.jpg',
    price: 3,
    quantity: 20
  },
  {
    id: uuid(),
    name: 'mung bean',
    category: 'vegetable',
    image:'mungbean.jpg',
    price: 5,
    quantity: 11
  },
  {
    id: uuid(),
    name: 'bok choy',
    category: 'vegetable',
    image:'bokchoy.jpg',
    price: 2,
    quantity: 3
  },
  {
    id: uuid(),
    name: 'tomato',
    category: 'fruit',
    image:'tomato.jpg',
    price: 65,
    quantity: 1
  },
  {
    id: uuid(),
    name: 'hubbard squash',
    category: 'vegetable',
    image:'hubbardsquash.jpg',
    price: 5,
    quantity: 51
  },
  {
    id: uuid(),
    name: 'onion',
    category: 'vegetable',
    image:'onion.jpg',
    price: 10,
    quantity: 10
  },
  {
    id: uuid(),
    name: 'durian',
    category: 'fruit',
    image:'durian.jpg',
    price: 11,
    quantity: 6
  },
  {
    id: uuid(),
    name: 'acorn squash',
    category: 'vegetable',
    image:'acornsquash.jpg',
    price: 4,
    quantity: 11
  },
]

export function getData() { return data }