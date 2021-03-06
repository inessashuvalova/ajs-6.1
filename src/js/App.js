export default function orderByProps(obj, keys = []) {
    
    const arrayKeys = [];
    const sortedArray = [];

    keys.forEach((key) => {
        if (key in obj) {
            arrayKeys.push({
                key,
                value: obj[key],
            });
        }
    })
    for (const key in obj) {
        if (!keys.includes(key)) {
            sortedArray.push({
                key,
                value: obj[key],
            })
        }
    }
    sortedArray.sort((a, b) => (a.key > b.key ? 1: -1));
    return [...arrayKeys, ...sortedArray]
}