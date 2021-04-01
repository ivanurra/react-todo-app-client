import React from 'react'

export default function Arrow({ color="#2B2F30",...props }) {
  return (
    <svg {...props} width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0506 19.7834L26.0917 12.4857L13.0506 5.24515V0L31 9.97719V14.9943L13.0506 25V19.7834Z" fill={color} />
      <path d="M27.0905 10.3098V14.7282H0V10.3098H27.0905Z" fill={color} />
    </svg>

  )
}
