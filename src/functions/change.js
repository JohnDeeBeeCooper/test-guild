export default (dealer, result) => {
    switch (dealer.strategy) {
        case 'Хитрый':
            dealer.features.moveOpp = result;
            break;
        case 'Злопамятный':
            if (!result) {
                dealer.features.wasDeceived = true;
            }
            break;
        case 'Ушлый':
            if (result == false && dealer.features.sequence.length > 0) {
                dealer.features.wasDeceived = true;
            }
            break;
        default:
            break;
    }
}