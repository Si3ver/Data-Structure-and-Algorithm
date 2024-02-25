/**
 * 低价高分酒店排序
 * 有这样一个数据结构，保存着酒店信息。 其中 price 为酒店的价格，score 为酒店评分。
 * 按照以下策略给酒店排序：先按价格由低到高排序，价格相等时，按评分由高到低排序
 *
 * easy
 *
 * 考点：Array.prototype.sort 的使用
 */

function compare(hotel1, hotel2) {
  if (hotel1.price === hotel2.price) {
    return hotel2.score - hotel1.score;
  }
  return hotel1.price - hotel2.price;
}

// ----
const data = {
  hotels: [
    {
      id: 1,
      price: 100,
      score: 80,
    },
    {
      id: 2,
      price: 70,
      score: 90,
    },
    {
      id: 3,
      price: 70,
      score: 95,
    },
    {
      id: 4,
      price: 70,
      score: 80,
    },
  ],
};

const h = data.hotels;
// console.log(h);
console.log(h.sort(compare));
