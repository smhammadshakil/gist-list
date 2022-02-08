import ForkedUsers from './ForkedUsers'
import { render, waitFor } from '@testing-library/react'
import dataService from '../services/dataService'

jest.mock('../services/dataService')

describe('<ForkedUsers /> with no props', () => {
    it('should match the snapshot', () => {
      const { container } = render(<ForkedUsers />)
      expect(container).toMatchSnapshot()
    });
  
    it('should have no child', () => {
      const { container } = render(<ForkedUsers />)
      expect(container.childElementCount).toEqual(0)
    });
    
    it('should have one child', async () => {
      const mock = [
        {
          owner: {
            avatar_url: 'url'
          },
          id: '120380193801'
        }
      ]
      dataService.getForkedDetails.mockResolvedValue(mock);
      const { container } = render(<ForkedUsers id={'120380193801'}/>)
      await waitFor(() => expect(dataService.getForkedDetails).toHaveBeenCalled())
      expect(container.childElementCount).toEqual(1)
    });

  });