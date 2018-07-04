export default () => {
    let faker = require('faker');

    let randomName = faker.name.findName();
    return randomName;
}