import nameGenerator from './nameGenerator';

export default () => {
    const arr = [];
    let id = 0;
    const countMembers = 60; // должно быть кратно количеству типов стратегий
    const character = ['Альтруист', 'Кидала', 'Хитрец', 'Непредсказуемый', 'Злопамятный', 'Ушлый'];
    for (let i = 0; i < character.length; i++) {
        for (let j = 0; j < countMembers / character.length; j++) {
            switch (character[i]) {
                case 'Хитрец':
                    arr.push({
                        id: id,
                        name: nameGenerator(),
                        strategy: character[i],
                        gold: 0,
                        total: 0,
                        features: {
                            moveOpp: true
                        }

                    });
                    break;

                case 'Злопамятный':
                    arr.push({
                        id: id,
                        name: nameGenerator(),
                        strategy: character[i],
                        gold: 0,
                        total: 0,
                        features: {
                            wasDeceived: false
                        }
                    });
                    break;

                case 'Ушлый':
                    arr.push({
                        id: id,
                        name: nameGenerator(),
                        strategy: character[i],
                        gold: 0,
                        total: 0,
                        features: {
                            sequence: [1, 1, 0, 1], //последовательность представлена наоборот, т.к это стэк
                            wasDeceived: false,
                            slyMode: false
                        }
                    });
                    break;
                default:
                    arr.push({
                        id: id,
                        name: nameGenerator(),
                        strategy: character[i],
                        gold: 0,
                        total: 0,
                        features: {}
                    });
                    break;
            }
            id++;
        }
    }
    return arr;
}