import { render, screen } from '@testing-library/react'
import Button from 'src/components/Button'
import '@testing-library/jest-dom'

describe('Home', () => {

  it('renders a div', () => {
    const {container} = render(<Button text="Hello World ^^"/>);

    const btn = container.querySelector('div');

    expect(btn).toMatchSnapshot();
  })

  it('renders a div 2', () => {
    const {container} = render(<Button text="This is a button ^^"/>);
    const btn = container.querySelector('div');
    expect(btn).toMatchSnapshot()
  })
  
})