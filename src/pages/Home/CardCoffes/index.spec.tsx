import { render } from '@testing-library/react';
import { CardCoffes } from './index';

describe('CardCoffes', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <CardCoffes
        coffee={{
          id: '',
          title: '',
          description: '',
          tags: [],
          price: 0,
          image: '',
          quantity: 0,
        }}
      />
    );
    wrapper.debug();
  });
});
