import character from "./character";

export default (dealer1, dealer2) => {
    const deal1 = character(dealer1.strategy, dealer1.features);
    const deal2 = character(dealer2.strategy, dealer2.features);
    const result = deal1 && deal2;
    if (result) {
        dealer1.gold += 4;
        dealer2.gold += 4;
    } else {
        if (deal1) {
            dealer1.gold += 1;
            dealer2.gold += 5;
        }
        if (deal2) {
            dealer1.gold += 5;
            dealer2.gold += 1;
        } else {
            dealer1.gold += 2;
            dealer2.gold += 2;
        }
    }
    return [dealer1,dealer2];
    
}