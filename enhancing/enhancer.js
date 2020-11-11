module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancer < 20) {
    item.enhancer++;
  }

  return item;
}

function fail(item) {
  if (item.enhancer < 15) {
    item.durability = item.durability - 5;
  } else if (item.enhancer === 15 || item.enhancer === 16) {
    item.durability = item.durability - 10;
  } else if (item.enhancer > 16) {
    item.enhancer--;
  }

  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
