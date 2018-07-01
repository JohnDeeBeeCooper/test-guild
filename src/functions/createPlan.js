const createPlan = (dealer, lastDealerId) => {
    let rand;
    for (let i = dealer.id + 1; i <= lastDealerId; i++) {
        rand = Math.floor(Math.random() * (11 - 5) + 5);
        dealer.plan.push({
            idDealer: i,
            dealCount: rand
        });
    }
    return dealer;
}
export default createPlan;