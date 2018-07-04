import deal from './deal';
import makeCouples from './makeCouples';
import updateMembers from './updateMembers';

export default (arr) => {
    const couples = makeCouples(arr, []);
    const logs = [];
    couples.forEach((item, i, couples) => {
        couples = couples.filter(couple => couple.dealCount > 0);
        const rand = Math.floor(Math.random() * couples.length);
        const current = couples[rand];
        logs.push(deal(current.dealer1, current.dealer2));
        current.dealCount--;

    });
    const [newArr, newLogs] = updateMembers(arr, logs);
    return [newArr, newLogs];
}