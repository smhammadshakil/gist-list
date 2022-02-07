import ForkedUsers from './ForkedUsers'

describe('<Login /> with no props', () => {
    const container = shallow(<ForkedUsers id={'id'} />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });
  
    it('should have an img tag', () => {
      expect(container.find('img').length).toEqual(0);
    });
  });