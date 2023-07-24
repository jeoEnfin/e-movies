import React from 'react'

import Banner from '../components/Banner/Banner'
import RowPost from '../components/RowPost/RowPost'
import { series } from '../urls'

function SeriesList() {
  return (
    <div>
        <Banner url={'?apikey=97b9ab9&t=series'}/>
        <RowPost title='Populer' url={series} />
    </div>
  )
}

export default SeriesList