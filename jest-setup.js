import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "@jonny/react-native-mock/mock";

Enzyme.configure({ adapter: new Adapter() });