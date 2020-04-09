import React from "react"
import {mount} from 'cypress-react-unit-test'

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
      <svg
        width="9em"
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

it('works', () => {
  mount(<Gauge />)
})
