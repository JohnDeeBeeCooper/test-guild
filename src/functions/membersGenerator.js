export default () => {
    const arr = [];
    let id = 0;
    const countMembers = 6; // должно быть кратно количеству типов стратегий
    const character = ['Альтруист', 'Кидала', 'Хитрец', 'Непредсказуемый', 'Злопамятный', 'Ушлый'];
    for (let i = 0; i < character.length; i++) {
        for (let j = 0; j < countMembers / character.length; j++) {
            switch (character[i]) {
                case 'Хитрец':
                    arr.push({
                        id: id,
                        name: 'name' + id,
                        strategy: character[i],
                        gold: 0,
                        plan: [],
                        features: {
                            moveOpp: true
                        }

                    });
                    break;

                case 'Злопамятный':
                    arr.push({
                            id: id,
                            name: 'name' + id,
                            strategy: character[i],
                            gold: 0,
                            plan: [],
                        features: {
                            wasDeceived: false
                        }
                    });
            break;

            case 'Ушлый':
                arr.push({
                    id: id,
                    name: 'name' + id,
                    strategy: character[i],
                    gold: 0,
                    plan: [],
                    features: {
                        sequence: [1, 0, 1, 1],
                        wasDeceived: false
                    }
                });
                break;
            default:
                arr.push({
                    id: id,
                    name: 'name' + id,
                    strategy: character[i],
                    gold: 0,
                    plan: []
                });
                break;
        }
        id++;
    }
}
return arr;
}