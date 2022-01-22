import React from 'react';
import ReactDOM from 'react-dom';
import './SearchInputBox.scss';

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    SearchBox,
    Hits,
    Configure,
    Pagination,
} from 'react-instantsearch-dom';
import { SearchHits } from './SearchHits';

// window.$ = $;

/* Algolia Search Bar */
const ClickOutHandler = require('react-onclickout');

const algoliaClient = algoliasearch(
    "UACGFLY3JG",
    "d73aebe93da3379053017d6c42d195f7",
);

// removes empty query searches from analytics
const searchClient = {
    search(requests) {
        const newRequests = requests.map((request) => {
            // test for empty string and change request parameter: analytics
            if (!request.params.query || request.params.query.length === 0) {
                request.params.analytics = false;
            }
            return request;
        });
        return algoliaClient.search(newRequests);
    },
};

class SearchInputBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            beta: '',
            cookie: '',
            hasInput: false,
            refresh: false,
        };
    }

    // Algolia - clicking out exits searchbox
    onClickOut = (event) => {
        const searchInput = document.getElementsByClassName(
            'ais-SearchBox-input',
        )[0].value;
        const domNode = ReactDOM.findDOMNode(this);
        if (searchInput === '' || !domNode || !domNode.contains(event.target))
            this.setState({ hasInput: false });
    } // end onClickOut


    /* eslint-enabe class-methods-use-this */

    render() {
        const {
            refresh, hasInput, beta, visibleHelloBar, cookie,
        } = this.state;
        return (
            <>
                {/* Aloglia Widgets */}
                <div className={!hasInput ? 'form-inline flex w-1/5 items-center pl-4' : 'form-inline flex w-1/5 items-center pl-4 float-searchBox'}>
                    <label htmlFor="search-lc" />

                    <ClickOutHandler onClickOut={this.onClickOut}>
                        <InstantSearch
                            searchClient={searchClient}
                            indexName="OS Docs"
                            refresh={refresh}
                        >
                            <Configure hitsPerPage={5} />

                            {/* forcefeed className because component does not accept natively as prop */}
                            <div className="search-icon">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 20 20"
                                    fill="#6b6b6b"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="black"/>
                                </svg>

                            </div>
                            <SearchBox
                                className="w-full pl-2"
                                id="search-lc"
                                submit={<></>}
                                reset={<></>}
                                translations={{
                                    placeholder: 'Search',
                                }}
                                onKeyUp={(event) => {
                                    this.setState({
                                        hasInput: event.currentTarget.value.length > 2,
                                    });
                                }}
                            />

                            <div className={!hasInput ? 'input-empty' : 'absolute bg-white search_results border'}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <SearchHits hitComponent={Hits} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Pagination />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InstantSearch>
                    </ClickOutHandler>

                </div>
            </>
        );
    }
}

export default SearchInputBox;
