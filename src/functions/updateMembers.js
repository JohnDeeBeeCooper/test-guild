import nameGenerator from "./nameGenerator";

export default (arr, logs) => {
    arr.sort((a, b) => b.gold - a.gold);
    const id = []
    logs.push('Конец года.');
    const startDeleteId = arr.length - Math.floor(arr.length / 5);
    const newArr = arr.filter(item => {
            if (arr[startDeleteId].gold < item.gold) {
                item.total += item.gold;
                item.gold = 0;
                return true;
            } else {
                logs.push(`Был изгнан ${item.name}, заработав за этот год всего ${item.gold} золота`);
                id.push(item.id);
                return false;
            }
    });
    logs.push('Двери для новых торговцев открыты.');
    id.forEach((item, i, id) => {
        const current = newArr[i];
        const nameDealer = nameGenerator();
        newArr.push({
            id: item,
            name: nameDealer,
            strategy: current.strategy,
            gold: 0,
            total: 0,
            features: current.features
        });
        logs.push(`В гильдию явился ${nameDealer}. Добро пожаловать.`);
    });
    return [newArr, logs];
}