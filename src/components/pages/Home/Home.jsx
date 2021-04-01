import React from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../RoundButton/RoundButton'
import Arrow from '../../svgs/Arrow'
import Text from '../../Text'
import SCHome from './Home.styled'

export default function Home() {


  return (
    <SCHome>
      <div className="home-wrapper">
        <Text as="h1" color="black" weight="gelionMedium" size="xl">
          Hey <Text as="span" weight="gelionMedium" size="xl">Ironhacker</Text> 👋🏽, organiza tus tareas en el proyecto final.
      </Text>
        <div className="button-container">
          <Link to="/login">
            <RoundButton>
              <Arrow />
            </RoundButton>
          </Link>
        </div>
      </div>
    </SCHome>
  )
}
