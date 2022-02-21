import React from 'react'

const Definitions = (props) => {

  console.log(props.data)
  // const list = props.data.map(item =>
  //         <dt>{item.dt}</dt>
  //         <dd>{item.dd}</dd>
  // )
  return(
      // <h1>Hello</h1>
      <dl>
          {props.data.map(item =>
              <>
                  <dt>{item.dt}</dt>
                  <dd>{item.dd}</dd>
              </>
          )}
      </dl>
  )
}

export default Definitions