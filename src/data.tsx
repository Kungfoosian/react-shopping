import { v4 as uuid } from 'uuid'

export type Data = {
  id: string,
  name: string,
  category: string,
  price: number,
  quantity: number
}

let data: Data[] = [
  {
    id: uuid(),
    name: 'lemon grass',
    category: 'vegetable',
    price: 2,
    quantity: 10
  },
  {
    id: uuid(),
    name: 'carrot',
    category: 'vegetable',
    price: 2,
    quantity: 2
  },
  {
    id: uuid(),
    name: 'leek',
    category: 'vegetable',
    price: 3,
    quantity: 20
  },
  {
    id: uuid(),
    name: 'mung bean',
    category: 'vegetable',
    price: 5,
    quantity: 11
  },
  {
    id: uuid(),
    name: 'bok choy',
    category: 'vegetable',
    price: 2,
    quantity: 3
  },
  {
    id: uuid(),
    name: 'tomato',
    category: 'vegetable',
    price: 65,
    quantity: 1
  },
  {
    id: uuid(),
    name: 'hubbard squash',
    category: 'vegetable',
    price: 5,
    quantity: 51
  },
  {
    id: uuid(),
    name: 'onion',
    category: 'vegetable',
    price: 10,
    quantity: 10
  },
  {
    id: uuid(),
    name: 'quandong',
    category: 'vegetable',
    price: 11,
    quantity: 6
  },
  {
    id: uuid(),
    name: 'acorn squash',
    category: 'vegetable',
    price: 4,
    quantity: 11
  },
]

export function getData() { return data }