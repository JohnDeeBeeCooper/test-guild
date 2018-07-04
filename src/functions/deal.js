import character from "./character";
import change from './change';

export default (dealer1, dealer2) => {
    const deal1 = character(dealer1.strategy, dealer1.features);
    const deal2 = character(dealer2.strategy, dealer2.features);
    change(dealer1, deal2);
    change(dealer2, deal1);
    let log = `Сделка проходит между ${dealer1.name} и ${dealer2.name}.\n`;
    const result = deal1 && deal2;
    if (result) {
        dealer1.gold += 4;
        dealer2.gold += 4;
        log += 'Оба торговца совершают честную сделку и получают по 4 золота';
    } else {
        if (!deal1 && !deal2) {
            dealer1.gold += 2;
            dealer2.gold += 2;
            log += 'Оба торговца жульничают и получают по 2 золота';
        } else {
            deal1 ? dealer1.gold += 1 : dealer1.gold += 5;
            deal2 ? dealer2.gold += 1 : dealer2.gold += 5;
            log += `Торговец ${deal1 ? dealer2.name : dealer1.name} жульничает и получает 5 золота. Торговец ${deal2 ? dealer2.name : dealer1.name} честно проводит сделку и получает 1 золото.`;
        }

    }
    return [dealer1, dealer2, log];

}