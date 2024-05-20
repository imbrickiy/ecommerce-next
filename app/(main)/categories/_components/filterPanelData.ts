export const SearchPanelCategories = [
  {
    id: 1,
    name: "Perfume",
  },
  {
    id: 2,
    name: "Trousers",
  },
  {
    id: 3,
    name: "Shoe",
  },
  {
    id: 4,
    name: "Handbag",
  },
  {
    id: 5,
    name: "Hat",
  },
  {
    id: 6,
    name: "Thermos",
  },
];

export const SearchPanelColor = [
  {
    id: 1,
    color: "bg-[#A3BEF8]",
  },
  {
    id: 2,
    color: "bg-[#FFD58A]",
  },
  {
    id: 3,
    color: "bg-[#83B18B]",
  },
  {
    id: 4,
    color: "bg-[#4078FF]",
  },
];

export const SearchPanelSize = [
  {
    id: 1,
    size: "S",
  },
  {
    id: 2,
    size: "M",
  },
  {
    id: 3,
    size: "L",
  },
  {
    id: 4,
    size: "XL",
  },
  {
    id: 5,
    size: "XXL",
  },
];

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "perfume", label: "Perfume", checked: false },
      { value: "trousers", label: "Trousers", checked: false },
      { value: "handbag", label: "Handbag", checked: false },
      { value: "hat", label: "Hat", checked: false },
      { value: "thermos", label: "Thermos", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    optionsColor: [
      { value: "white", label: "White", color: "bg-[#A3BEF8]", checked: false },
      { value: "beige", label: "Beige", color: "bg-[#FFD58A]", checked: false },
      { value: "blue", label: "Blue", color: "bg-[#83B18B]", checked: false },
      { value: "brown", label: "Brown", color: "bg-[#4078FF]", checked: false },
      { value: "green", label: "Green", color: "bg-[#A3BEF8]", checked: false },
      {
        value: "purple",
        label: "Purple",
        color: "bg-[#A3BEF8]",
        checked: false,
      },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    optionsSize: [
      { value: "xs", label: "XS", checked: false },
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "2xl", label: "2XL", checked: false },
    ],
  },
];
