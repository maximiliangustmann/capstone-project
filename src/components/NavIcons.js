import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Book } from '../img/book.svg'
import { ReactComponent as Audiobook } from '../img/audiobook.svg'
import { ReactComponent as Podcast } from '../img/podcast.svg'
import { ReactComponent as Film } from '../img/film.svg'
import { ReactComponent as Series } from '../img/series.svg'

export default function NavIcons() {
  return (
    <IconWrapper>
      <BookIcon />
      <AudiobookIcon />
      <PodcastIcon />
      <FilmIcon />
      <SeriesIcon />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 20%;
  fill: var(--main-red);
  justify-content: center;
`

const BookIcon = styled(Book)`
  height: 80%;
  width: 80%;
  grid-column: 3;
  grid-row: 1;
`

const AudiobookIcon = styled(Audiobook)`
  height: 80%;
  width: 80%;
  grid-column: 1;
  grid-row: 2;
`

const PodcastIcon = styled(Podcast)`
  height: 80%;
  width: 80%;
  grid-column: 5;
  grid-row: 2;
`

const FilmIcon = styled(Film)`
  height: 80%;
  width: 80%;
  grid-column: 2;
  grid-row: 3;
`

const SeriesIcon = styled(Series)`
  height: 80%;
  width: 80%;
  grid-column: 4;
  grid-row: 3;
`
