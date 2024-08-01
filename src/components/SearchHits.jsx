import React from 'react';
import { Link } from 'gatsby';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';

import './SearchHits.scss';

const SearchBox = ({ currentRefinement, refine }) => (
    <div className="ais-SearchBox">
        <form noValidate action="" role="search" className="ais-SearchBox-form">
            <input
                className="ais-SearchBox-input"
                type="search"
                value={currentRefinement}
                onChange={(event) => refine(event.currentTarget.value)}
            />
        </form>
    </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => (
    <ul className="style">
        {hits.length < 1 ? <li className='px-5 py-3 rounded-lg text-center'>No search results found</li> : ''}
        {hits.map((hit) => (
            <li key={hit.title} className="shadow sm:rounded-lg">
                <Link to={hit?.slug}>
                    <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
                    <p dangerouslySetInnerHTML={{ __html: hit._snippetResult.excerpt.value }} />
                </Link>
            </li>
        ))}
    </ul>
);
/* eslint-enable */

export const SearchHits = connectHits(Hits);
