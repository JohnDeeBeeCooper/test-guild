import deal from './deal';
import makeCouples from './makeCouples';
import updateMembers from './updateMembers';

export default (arr) => {
    let couples = makeCouples(arr, []);
    console.log(couples);
    const logs = [];
    while (couples.length > 0) {
        //console.log(couples);
        const rand = Math.floor(Math.random() * couples.length);
        const current = couples[rand];
        logs.push(deal(current.dealer1, current.dealer2));
        current.dealCount--;
        couples = couples.filter(couple => couple.dealCount > 0);
    }
    const [newArr, newLogs] = updateMembers(arr, logs);
    return [newArr, newLogs];
}