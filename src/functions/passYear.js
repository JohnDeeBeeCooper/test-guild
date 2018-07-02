import createPlan from './createPlan';
import deal from './deal';

export default (arr) => {
    const newArr = arr.map(a => createPlan(a, arr.length - 1));
    let log;
    let logs = [];
    newArr.forEach((item, i, newArr) => {
        for (let j = 0; j < item.plan.length; j++) {
            while (item.plan[j].dealCount > 0) {
                [item, newArr[item.plan[j].idDealer], log] = deal(item, newArr[item.plan[j].idDealer]);
                logs.push(log);
                item.plan[j].dealCount -= 1;
            }
        }
    });
    return [newArr, logs];
}