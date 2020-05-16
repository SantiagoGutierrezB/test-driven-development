exports.sum = (a, b) => {
    return {x: a.x + b.x, y: a.y + b.y};
};

exports.sub = (a, b) => {
    return {x: a.x - b.x, y: a.y - b.y};
};

exports.scalar = (a, x) => {
    return {x: a.x * parseFloat(x), y: a.y * parseFloat(x)};
};

exports.dot = (a, b) => {
    return {value: (a.x * b.x) + (a.y * b.y)};
};
