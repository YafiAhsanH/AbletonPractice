import React from 'react'

const TextLink = ({children}:{children: string}) => {
  return (
    <span className='text-blue-700 hover:cursor-pointer'>{children}</span>
  )
}

export default TextLink