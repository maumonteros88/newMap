const products = [
  { id: "1", name: "shirt", category: "clothing" },
  { id: "2", name: "Sports Tennis", category: "accessories" },
  { id: "3", name: "Casual shoes", category: "footwear" },
  { id: "4", name: "skirt", category: "clothing" },
  { id: "5", name: "tie", category: "clothing" },
];


Array.prototype.mauMap = function (callback) {
  const recorrer = this;
   let result = [];

  for (let i = 0; i < recorrer.length; i++)
   result[i] = callback(recorrer[i]);
  return result
};

const newArrayFromNewMap = products.mauMap((item) => {
  return item.id * 2 ;
});

console.log(newArrayFromNewMap);
