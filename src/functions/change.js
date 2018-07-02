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
            let quirky = dealer.features;
            if (result === false && quirky.sequence.length > 0) {
                quirky.wasDeceived = true;
            }
            if (quirky.sequence.length === 0 && quirky.wasDeceived === false) {
                quirky.slyMode = result;
            }
            break;
        default:
            break;
    }
}