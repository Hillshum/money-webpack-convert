import React from 'react'
// so 

import 'logo' from '../../assets/img'

export default function Logo() {
  return <img src={logo} />
}

// becomes

export default function Logo() {
  return <img src="/path/to/somewhere/webpack/put/it.svg" />
}