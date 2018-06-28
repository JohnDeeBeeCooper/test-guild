export default () => {
    const arr = [];
    let id = 0;
    const countMembers = 60;
    const character = ['altruist', 'swindler', 'sly', 'unpredictable', 'resentful', 'quirky'];
    for (let i = 0; i < character.length; i++) {
        for (let j = 0; j < countMembers / character.length; j++) {
            arr.push({
                id: id,
                name: 'name' + id,
                strategy: character[i],
                gold: 0
            });
            id++;
        }
    }
    return arr;
}