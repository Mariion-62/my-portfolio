import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CardParcours, CardParcoursProps } from './CardParcours'

const mockData: CardParcoursProps = {
  id: 1,
  dateBegin: '2012',
  dateEnd: '2022',
  job: 'Job Title',
  experience: 'Description of the experience',
  picture: '/path/to/image.png',
  enterprise: 'Enterprise Name',
  expTwo: 'Additional experience 1',
  expThree: 'Additional experience 2',
  expFour: 'Additional experience 3',
  expFive: 'Additional experience 4'
}

describe('CardParcours Component', () => {
  it('renders the component with all props', () => {
    render(<CardParcours {...mockData} />)

    expect(screen.getByText('2012 - 2022')).toBeInTheDocument()
    expect(screen.getByText('Job Title')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Name')).toBeInTheDocument()
    expect(screen.getByText('Description of the experience')).toBeInTheDocument()
    expect(screen.getByText('Additional experience 1')).toBeInTheDocument()
    expect(screen.getByText('Additional experience 2')).toBeInTheDocument()
    expect(screen.getByText('Additional experience 3')).toBeInTheDocument()
    expect(screen.getByText('Additional experience 4')).toBeInTheDocument()
  })

  it('renders the component without optional props', () => {
    const { ...requiredProps } = mockData
    render(<CardParcours {...requiredProps} />)

    expect(screen.getByText('2012 - 2022')).toBeInTheDocument()
    expect(screen.getByText('Job Title')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Name')).toBeInTheDocument()
    expect(screen.getByText('Description of the experience')).toBeInTheDocument()
  })
})
