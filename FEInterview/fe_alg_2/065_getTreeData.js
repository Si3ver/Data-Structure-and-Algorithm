// 根据 id 从多叉树里面查找出对应的节点的 name
// 一个树形的数据(如下数据)，面试官给你一个 id，然后拿到对应的 name?
// 主要考查深度/广度优先遍历,递归算法

// 方法1:递归
let result = "";
const recursion = (cityData, id) => {
  if (!cityData || !cityData.length) return;

  const helper = (arr, id) => {
    const n = arr.length;
    for (let i = 0; i < n; ++i) {
      const { children = [] } = arr[i] || {};
      if (arr[i].id === id) {
        return arr[i].name;
      } else if (children.length > 0) {
        result = helper(children, id);
        if (result) return result;
      }
    }
    return;
  }

  let result = '';
  result = helper(cityData, id);
  return result || '';
};

// 方法2: BFS
const range = (cityData, id) => {
  let result = "";
  if (!cityData || !cityData.length) return;
  // 定义一个数据栈
  let stack = [];

  let item = null;

  //先将第一层节点放入栈
  for (var i = 0, len = cityData.length; i < len; i++) {
    stack.push(cityData[i]);
  }

  while (stack.length) {
    // 将数据栈的第一个取出来
    item = stack.shift();
    // 如果符合就赋值给result
    if (item.id === id) {
      result = item.name;
    }
    //如果该节点有子节点，继续添加进入栈底
    if (item.children && item.children.length) {
      stack = stack.concat(item.children);
    }
  }
  return result;
};

// 方法3: DFS
const deep = (cityData, id) => {
  let result = "";
  // 没有数据直接返回
  if (!cityData || !cityData.length) return;
  // 先定义一个数据栈
  let stack = [];
  let item = null;

  //先将第一层节点放入数据栈
  for (var i = 0, len = cityData.length; i < len; i++) {
    stack.push(cityData[i]);
  }
  // 循环
  while (stack.length) {
    item = stack.shift();
    if (item.id === id) {
      result = item.name;
    }
    //如果该节点有子节点，继续添加进入栈顶
    if (item.children && item.children.length) {
      // 注意这里调换了顺序
      stack = item.children.concat(stack);
    }
  }
  return result;
};

// 方法4: 正则
const regular = (cityData, id) => {
  // 没有数据直接返回
  if (!cityData || !cityData.length) return;
  // 数据转成字符串
  const cityStr = JSON.stringify(cityData);
  // 定义正则
  const reg = new RegExp(`"id":"${id}","name":"([^\\x00-\\xff]+)"`);
  // 取到正则的子字符串并返回
  const matchRes = cityStr.match(reg);
  return matchRes ? matchRes[1] : '';
};

// ---- test ----
const cityData = [
  {
    id: '36',
    name: '江西省',
    children: [
      {
        id: '3601',
        name: '南昌市',
        children: [
          {
            id: '360102',
            name: '东湖区',
          },
          {
            id: '360103',
            name: '西湖区',
          },
          {
            id: '360104',
            name: '青云谱区',
          },
          {
            id: '360111',
            name: '青山湖区',
          },
          {
            id: '360112',
            name: '新建区',
          },
          {
            id: '360113',
            name: '红谷滩区',
          },
          {
            id: '360121',
            name: '南昌县',
          },
        ],
      }
    ]
  },
  {
    id: '44',
    name: "广东省",
    children: [
      {
        id: '4401',
        name: "广州市",
        children: [
          {
            id: '440103',
            name: '荔湾区',
          },
          {
            id: '440104',
            name: '越秀区',
          },
          {
            id: '440105',
            name: '海珠区',
          },
          {
            id: '440106',
            name: '天河区',
          },
          {
            id: '440111',
            name: '白云区',
          },
          {
            id: '440112',
            name: '黄埔区',
          },
          {
            id: '440113',
            name: '番禺区',
          },
          {
            id: '440114',
            name: '花都区',
          },
          {
            id: '440115',
            name: '南沙区',
          },
          {
            id: '440117',
            name: '从化区',
          },
          {
            id: '440118',
            name: '增城区',
          },
        ],
      },
      {
        id: '4403',
        name: "深圳市",
        children: [
          {
            id: '440303',
            name: '罗湖区',
          },
          {
            id: '440304',
            name: '福田区',
          },
          {
            id: '440305',
            name: '南山区',
          },
          {
            id: '440306',
            name: '宝安区',
          },
          {
            id: '440307',
            name: '龙岗区',
          },
          {
            id: '440308',
            name: '盐田区',
          },
          {
            id: '440309',
            name: '龙华区',
          },
          {
            id: '440310',
            name: '坪山区',
          },
          {
            id: '440311',
            name: '光明区',
          },
        ],
      },
      {
        id: 12,
        name: "广州",
        children: [
          {
            id: 122,
            name: "白云区",
            children: [
              {
                id: 1222,
                name: "白云区",
                children: [],
              },
            ],
          },
          {
            id: 122,
            name: "珠海区",
            children: [],
          },
        ],
      },
    ],
  },
];


console.log('--------递归--------');
console.log(recursion(cityData, '44')); // 广东省
console.log(recursion(cityData, '4400')); // ''
console.log(recursion(cityData, '4403')); // 深圳市
console.log(recursion(cityData, '440305')); // 南山区

console.log('--------BFS--------');
console.log(range(cityData, '44'));
console.log(range(cityData, '4400'));
console.log(range(cityData, '4403'));
console.log(range(cityData, '440308')); // 盐田区

console.log('--------DFS--------');
console.log(deep(cityData, '44'));
console.log(deep(cityData, '4400'));
console.log(deep(cityData, '4403'));
console.log(deep(cityData, '440310')); // 坪山区

console.log('--------regex--------');
console.log(regular(cityData, '44')); // 广东省
console.log(regular(cityData, '4400'));
console.log(regular(cityData, '4403')); // 深圳市
console.log(regular(cityData, '440311')); // 光明区
