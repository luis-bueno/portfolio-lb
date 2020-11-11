import { Helmet } from "react-helmet"
import React from "react"
// import { withPrefix } from "gatsby"

const ScriptHero = () => {
  return (
    <div>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        <script src="/animation.js"></script>
      </Helmet>
    </div>
  )
}

export default ScriptHero
