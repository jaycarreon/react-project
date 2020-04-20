import React from 'react'

import Result from './Result'

function Results ({ results, MoviePage }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} MoviePage={MoviePage} />
			))}
		</section>
	)
}

export default Results
