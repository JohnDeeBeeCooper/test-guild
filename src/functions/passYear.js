import deal from './deal';
import makeCouples from './makeCouples';
import updateMembers from './updateMembers';

export default (arr) => {
    const couples = makeCouples(arr, []);
    const logs = [];
    couples.map(item => {
        while (item.dealCount > 0) {
            logs.push(deal(item.dealer1, item.dealer2)[2]);
            item.dealCount--;
        }
    });

    updateMembers(arr,logs);
    return [arr, logs];
}