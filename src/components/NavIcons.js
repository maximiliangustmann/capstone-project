import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Book } from '../img/book.svg'
import { ReactComponent as Audiobook } from '../img/audiobook.svg'
import { ReactComponent as Podcast } from '../img/podcast.svg'
import { ReactComponent as Film } from '../img/film.svg'
import { ReactComponent as Series } from '../img/series.svg'
import { useHistory } from 'react-router-dom'

export default function NavIcons({ activeFilter }) {
  const history = useHistory()
  return (
    <IconWrapper>
      <BookIcon
        onClick={() => {
          history.push('/reviews')
          activeFilter('Book')
        }}
      />
      <AudiobookIcon
        onClick={() => {
          history.push('/reviews')
          activeFilter('Audiobook')
        }}
      />
      <PodcastIcon
        onClick={() => {
          history.push('/reviews')
          activeFilter('Podcast')
        }}
      />
      <FilmIcon
        onClick={() => {
          history.push('/reviews')
          activeFilter('Film')
        }}
      />
      <SeriesIcon
        onClick={() => {
          history.push('/reviews')
          activeFilter('Series')
        }}
      />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 0.15fr 0.15fr 0.15fr 0.15fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 30%;
  fill: var(--main-red);
  justify-content: center;
  margin-top: 100px;
`

const BookIcon = styled(Book)`
  height: 100%;
  width: 100%;
  grid-column: 3;
  grid-row: 1;
`

const AudiobookIcon = styled(Audiobook)`
  height: 100%;
  width: 100%%;
  grid-column: 1;
  grid-row: 2;
`

const PodcastIcon = styled(Podcast)`
  height: 100%;
  width: 100%;
  grid-column: 5;
  grid-row: 2;
`

const FilmIcon = styled(Film)`
  height: 100%;
  width: 100%;
  grid-column: 2;
  grid-row: 3;
`

const SeriesIcon = styled(Series)`
  height: 100%;
  width: 100%;
  grid-column: 4;
  grid-row: 3;
`
