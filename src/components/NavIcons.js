import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Book } from '../img/book.svg'
import { ReactComponent as Audiobook } from '../img/audiobook.svg'
import { ReactComponent as Podcast } from '../img/podcast.svg'
import { ReactComponent as Film } from '../img/film.svg'
import { ReactComponent as Series } from '../img/series.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

NavIcons.propTypes = {
  activeFilter: PropTypes.func,
}

export default function NavIcons({ activeFilter }) {
  const history = useHistory()
  return (
    <IconWrapper>
      <BookIconWrapper>
        <BookIcon
          data-cy="book-icon"
          onClick={() => {
            history.push('/reviews')
            activeFilter('Book')
          }}
        />
        <p>Books</p>
      </BookIconWrapper>

      <AudiobookIconWrapper>
        <AudiobookIcon
          data-cy="audiobook-icon"
          onClick={() => {
            history.push('/reviews')
            activeFilter('Audiobook')
          }}
        />
        <p>Audiobooks</p>
      </AudiobookIconWrapper>

      <PodcastIconWrapper>
        <PodcastIcon
          data-cy="podcast-icon"
          onClick={() => {
            history.push('/reviews')
            activeFilter('Podcast')
          }}
        />
        <p>Podcasts</p>
      </PodcastIconWrapper>

      <FilmIconWrapper>
        <FilmIcon
          data-cy="film-icon"
          onClick={() => {
            history.push('/reviews')
            activeFilter('Film')
          }}
        />
        <p>Films</p>
      </FilmIconWrapper>

      <SeriesIconWrapper>
        <SeriesIcon
          data-cy="series-icon"
          onClick={() => {
            history.push('/reviews')
            activeFilter('Series')
          }}
        />
        <p>Series</p>
      </SeriesIconWrapper>
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 0.15fr 0.15fr 0.15fr 0.15fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 10%;
  fill: var(--main-red);
  justify-content: center;
  margin-top: 75px;
  color: var(--main-white);
  font-size: 18px;
  font-weight: 500;
`

const BookIconWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BookIcon = styled(Book)`
  height: 40px;
  width: 40px;
`

const AudiobookIconWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AudiobookIcon = styled(Audiobook)`
  height: 40px;
  width: 40px;
`

const PodcastIconWrapper = styled.div`
  grid-column: 5;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PodcastIcon = styled(Podcast)`
  height: 40px;
  width: 40px;
`

const FilmIconWrapper = styled.div`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FilmIcon = styled(Film)`
  height: 40px;
  width: 40px;
`

const SeriesIconWrapper = styled.div`
  grid-column: 4;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SeriesIcon = styled(Series)`
  height: 40px;
  width: 40px;
`
