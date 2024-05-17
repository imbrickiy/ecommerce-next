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
      { value: "perfume", label: "Perfume" },
      { value: "trousers", label: "Trousers" },
      { value: "handbag", label: "Handbag" },
      { value: "hat", label: "Hat" },
      { value: "thermos", label: "Thermos" },
    ],
  },
  {
    id: "color",
    name: "Color",
    optionsColor: [
      { value: "white", label: "White", color: "bg-[#A3BEF8]" },
      { value: "beige", label: "Beige", color: "bg-[#FFD58A]" },
      { value: "blue", label: "Blue", color: "bg-[#83B18B]" },
      { value: "brown", label: "Brown", color: "bg-[#4078FF]" },
      { value: "green", label: "Green", color: "bg-[#A3BEF8]" },
      { value: "purple", label: "Purple", color: "bg-[#A3BEF8]" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    optionsSize: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
