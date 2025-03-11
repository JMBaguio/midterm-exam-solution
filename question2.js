function countProperties(obj) {
    const properties = Objext.keys(obj);

    return properties.length;
}

console.log(countProperties({ a: 1, b: 2, c: 3}));

