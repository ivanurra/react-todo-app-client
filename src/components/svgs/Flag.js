import React from 'react'

export default function Flag({ color = "#FDD262", ...props }) {
  return (
    <svg {...props} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9 9L18.66 7.8C18.57 7.34 18.16 7 17.68 7H10.5C9.95 7 9.5 7.45 9.5 8V23C9.5 23.55 9.95 24 10.5 24C11.05 24 11.5 23.55 11.5 23V17H17.1L17.34 18.2C17.43 18.67 17.84 19 18.32 19H23.5C24.05 19 24.5 18.55 24.5 18V10C24.5 9.45 24.05 9 23.5 9H18.9Z" fill={color} />
    </svg>

  )
}
