export default () => {
    let faker = require('faker');
    let randomName = Math.random() < 0.001 ? 'Kraft Lawrence' : faker.name.findName();
    return randomName;
}