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
            result = features;
            break;
        default:
            break;
    }
    const newRand = Math.floor(Math.random() * 101);
    console.log(result);
    console.log(newRand);
    return newRand < 5 ? result : !result;
}