import { MovieCard } from './MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div className='d-flex-wrap' style={{gap:"2%"}}>
      {
        movieList.map((Element)=>(<MovieCard{...Element}/>))
      }
    </div>
  )
}
export default MovieList