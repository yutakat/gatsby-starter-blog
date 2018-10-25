import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.0),
        }}
      >
        <p>
          <dl>
          <dd> Author: <strong>L.star</strong> </dd>
          <dd> 
            Twitter: <a href="https://twitter.com/L_star">
              @L_star
            </a>
          </dd>
          <dd>
            Blog: <a href="http://blog.nonsensecorner.com/">
                blog.nonsensecorner.com
            </a>
          </dd>

          </dl>
        </p>
      </div>
    )
  }
}

export default Bio
