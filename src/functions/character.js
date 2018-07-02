export default (character, features) => {
    let result = true;
    let rand = Math.floor(Math.random() * (2 - 0));
    rand === 1 ? rand = true : rand = false;
    switch (character) {
        case 'Кидала':
            result = !result;
            break;
        case 'Хитрец':
            result = result && features.moveOpp;
            break;
        case 'Непредсказуемый':
            result = result && rand;
            break;
        case 'Злопамятный':
            result = result && !features.wasDeceived;
            break;
        case 'Ушлый':
            if (features.sequence.length) {
                result = features.sequence[features.sequence.length - 1];
                features.sequence.pop();
            } else {
                result = !features.wasDeceived;
            }
            break;
        default:
            break;
    }
    const newRand = Math.floor(Math.random() * 101);
    console.log('Показатель рандома:' + newRand);
    return newRand <= 5 ? !result : result;
}