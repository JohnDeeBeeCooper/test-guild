const makeCouples = (arr, result) => {
    const [current, ...newArr] = arr;
    if (newArr.length === 0) {
        return result;
    }
    newArr.map(item => {
        const obj = {
            dealer1: current,
            dealer2: item,
            dealCount: Math.floor(Math.random() * (11 - 5) + 5)
        };
        result.push(obj);
    }, []);
    return makeCouples(newArr, result)
}
export default makeCouples;