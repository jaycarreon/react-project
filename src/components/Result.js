import React from 'react'

function Result({ result, MoviePage }) {
	return (
		<div className="result" onClick={() => MoviePage(result.imdbID)}>
			<img src={result.Poster} />
		</div>
	)
}

export default Result
