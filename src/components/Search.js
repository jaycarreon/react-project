import React from 'react'

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input
				type="text"
				placeholder="Search for a movie i.e Titanic" 
				className="searchbox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search
