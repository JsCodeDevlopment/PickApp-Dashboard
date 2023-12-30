import { OrderStatus } from "../interfaces/IOrderPopUpProps";
import { IOrder } from "../interfaces/IOrders";

export function MockOrders() {
  const Orders: IOrder[] = [
    {
      _id: "6568bca82821ebca67629bb6",
      table: "MESA 01",
      status: OrderStatus.WAITING,
      createdAt: "2023-11-30T16:47:36.819Z",
      products: [
        {
          product: {
            _id: "6568a1b893082b70379ccb9b",
            name: "Pizza 4 Queijos",
            description:
              "Deliciosa pizza com 4 sabores de queijos que vão te marcar.",
            imagePath: "1703912337862-4queijos.jpg",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9c",
              },
              {
                name: "Catupiry",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9d",
              },
              {
                name: "Parmesão",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9e",
              },
              {
                name: "Shedder",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9f",
              },
            ],
            category: "656889089e6f8409b6b41d79",
            __v: 0,
          },
          quantity: 5,
          _id: "6568bca82821ebca67629bb7",
        },
        
      ],
      __v: 0,
    },
    {
      _id: "6569569fbb89b11d73429848",
      table: "MESA 02",
      status: OrderStatus.WAITING,
      createdAt: "2023-12-01T03:44:31.279Z",
      products: [
        {
          product: {
            _id: "65695666bb89b11d73429839",
            name: "X-TUDO",
            description:
              "O maior e mais completo hamburguer que você poderá provar.",
            imagePath: "1703911300121-xtudo.jpg",
            price: 20,
            ingredients: [
              {
                name: "Pão",
                icon: "🍞",
                _id: "65695666bb89b11d7342983a",
              },
              {
                name: "Carne",
                icon: "🥩",
                _id: "65695666bb89b11d7342983b",
              },
              {
                name: "Molho",
                icon: "🍅",
                _id: "65695666bb89b11d7342983c",
              },
              {
                name: "Ingrediente Misterioso",
                icon: "🥚",
                _id: "65695666bb89b11d7342983d",
              },
            ],
            category: "6568097e7dabaf88285fc358",
            __v: 0,
          },
          quantity: 7,
          _id: "6569569fbb89b11d73429849",
        },
      ],
      __v: 0,
    },
    {
      _id: "65695902ad11c7b571708d48",
      table: "MESA 03",
      status: OrderStatus.WAITING,
      createdAt: "2023-12-01T03:54:42.659Z",
      products: [
        {
          product: {
            _id: "65695666bb89b11d73429839",
            name: "X-TUDO",
            description:
              "O maior e mais completo hamburguer que você poderá provar.",
            imagePath: "1703911300121-xtudo.jpg",
            price: 20,
            ingredients: [
              {
                name: "Pão",
                icon: "🍞",
                _id: "65695666bb89b11d7342983a",
              },
              {
                name: "Carne",
                icon: "🥩",
                _id: "65695666bb89b11d7342983b",
              },
              {
                name: "Molho",
                icon: "🍅",
                _id: "65695666bb89b11d7342983c",
              },
              {
                name: "Ingrediente Misterioso",
                icon: "🥚",
                _id: "65695666bb89b11d7342983d",
              },
            ],
            category: "6568097e7dabaf88285fc358",
            __v: 0,
          },
          quantity: 7,
          _id: "65695902ad11c7b571708d49",
        },
        {
          product: {
            _id: "6568a1b893082b70379ccb9b",
            name: "Pizza 4 Queijos",
            description:
              "Deliciosa pizza com 4 sabores de queijos que vão te marcar.",
            imagePath: "1703912337862-4queijos.jpg",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9c",
              },
              {
                name: "Catupiry",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9d",
              },
              {
                name: "Parmesão",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9e",
              },
              {
                name: "Shedder",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9f",
              },
            ],
            category: "656889089e6f8409b6b41d79",
            __v: 0,
          },
          quantity: 2,
          _id: "65695902ad11c7b571708d4a",
        },
      ],
      __v: 0,
    },
    {
      _id: "65695902ad11c7b571708d48",
      table: "MESA 05",
      status: OrderStatus.DONE,
      createdAt: "2023-12-01T03:54:42.659Z",
      products: [
        {
          product: {
            _id: "65695666bb89b11d73429839",
            name: "X-TUDO",
            description:
              "O maior e mais completo hamburguer que você poderá provar.",
            imagePath: "1703911300121-xtudo.jpg",
            price: 20,
            ingredients: [
              {
                name: "Pão",
                icon: "🍞",
                _id: "65695666bb89b11d7342983a",
              },
              {
                name: "Carne",
                icon: "🥩",
                _id: "65695666bb89b11d7342983b",
              },
              {
                name: "Molho",
                icon: "🍅",
                _id: "65695666bb89b11d7342983c",
              },
              {
                name: "Ingrediente Misterioso",
                icon: "🥚",
                _id: "65695666bb89b11d7342983d",
              },
            ],
            category: "6568097e7dabaf88285fc358",
            __v: 0,
          },
          quantity: 7,
          _id: "65695902ad11c7b571708d49",
        },
        {
          product: {
            _id: "6568a1b893082b70379ccb9b",
            name: "Pizza 4 Queijos",
            description:
              "Deliciosa pizza com 4 sabores de queijos que vão te marcar.",
            imagePath: "1703912337862-4queijos.jpg",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9c",
              },
              {
                name: "Catupiry",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9d",
              },
              {
                name: "Parmesão",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9e",
              },
              {
                name: "Shedder",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9f",
              },
            ],
            category: "656889089e6f8409b6b41d79",
            __v: 0,
          },
          quantity: 2,
          _id: "65695902ad11c7b571708d4a",
        },
      ],
      __v: 0,
    },
    {
      _id: "65695902ad11c7b571708d48",
      table: "MESA 08",
      status: OrderStatus.IN_PRODUCTION,
      createdAt: "2023-12-01T03:54:42.659Z",
      products: [
        {
          product: {
            _id: "65695666bb89b11d73429839",
            name: "X-TUDO",
            description:
              "O maior e mais completo hamburguer que você poderá provar.",
            imagePath: "1703911300121-xtudo.jpg",
            price: 20,
            ingredients: [
              {
                name: "Pão",
                icon: "🍞",
                _id: "65695666bb89b11d7342983a",
              },
              {
                name: "Carne",
                icon: "🥩",
                _id: "65695666bb89b11d7342983b",
              },
              {
                name: "Molho",
                icon: "🍅",
                _id: "65695666bb89b11d7342983c",
              },
              {
                name: "Ingrediente Misterioso",
                icon: "🥚",
                _id: "65695666bb89b11d7342983d",
              },
            ],
            category: "6568097e7dabaf88285fc358",
            __v: 0,
          },
          quantity: 7,
          _id: "65695902ad11c7b571708d49",
        },
        {
          product: {
            _id: "6568a1b893082b70379ccb9b",
            name: "Pizza 4 Queijos",
            description:
              "Deliciosa pizza com 4 sabores de queijos que vão te marcar.",
            imagePath: "1703912337862-4queijos.jpg",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9c",
              },
              {
                name: "Catupiry",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9d",
              },
              {
                name: "Parmesão",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9e",
              },
              {
                name: "Shedder",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9f",
              },
            ],
            category: "656889089e6f8409b6b41d79",
            __v: 0,
          },
          quantity: 2,
          _id: "65695902ad11c7b571708d4a",
        },
      ],
      __v: 0,
    },
    {
      _id: "65695902ad11c7b571708d48",
      table: "MESA 010",
      status: OrderStatus.CANCELED,
      createdAt: "2023-12-01T03:54:42.659Z",
      products: [
        {
          product: {
            _id: "65695666bb89b11d73429839",
            name: "X-TUDO",
            description:
              "O maior e mais completo hamburguer que você poderá provar.",
            imagePath: "1703911300121-xtudo.jpg",
            price: 20,
            ingredients: [
              {
                name: "Pão",
                icon: "🍞",
                _id: "65695666bb89b11d7342983a",
              },
              {
                name: "Carne",
                icon: "🥩",
                _id: "65695666bb89b11d7342983b",
              },
              {
                name: "Molho",
                icon: "🍅",
                _id: "65695666bb89b11d7342983c",
              },
              {
                name: "Ingrediente Misterioso",
                icon: "🥚",
                _id: "65695666bb89b11d7342983d",
              },
            ],
            category: "6568097e7dabaf88285fc358",
            __v: 0,
          },
          quantity: 7,
          _id: "65695902ad11c7b571708d49",
        },
        {
          product: {
            _id: "6568a1b893082b70379ccb9b",
            name: "Pizza 4 Queijos",
            description:
              "Deliciosa pizza com 4 sabores de queijos que vão te marcar.",
            imagePath: "1703912337862-4queijos.jpg",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9c",
              },
              {
                name: "Catupiry",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9d",
              },
              {
                name: "Parmesão",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9e",
              },
              {
                name: "Shedder",
                icon: "🧀",
                _id: "6568a1b893082b70379ccb9f",
              },
            ],
            category: "656889089e6f8409b6b41d79",
            __v: 0,
          },
          quantity: 2,
          _id: "65695902ad11c7b571708d4a",
        },
      ],
      __v: 0,
    },
  ];

  return { Orders };
}
