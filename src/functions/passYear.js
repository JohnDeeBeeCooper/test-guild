import makeCouples from './makeCouples';
import deal from './deal';

export default (arr) => {
    const couples = makeCouples(arr,[]);
    const offer = couples.map(item => deal(item));
    console.log(couples);
}