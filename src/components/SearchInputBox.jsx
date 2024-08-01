import React from 'react';
import ReactDOM from 'react-dom';
import './SearchInputBox.scss';

import {
    InstantSearch,
    SearchBox,
    Hits,
    Configure,
    Pagination,
} from 'react-instantsearch-dom';
import { SearchHits } from './SearchHits';

import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

const ClickOutHandler = require('react-onclickout');
// Create the Typesense InstantSearch Adapter instance
// @ts-ignore
// console.log(process.env.TYPESENSE_SEARCH_API_KEY);
// console.log(process.env.TYPESENSE_HOST);
const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.TYPESENSE_SEARCH_API_KEY, // Use your Typesense search-only API key here
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      }
    ],
  },
  collectionSpecificSearchParameters: {
    docs: {
      query_by: "title,search_keyword,excerpt",
    }
  }
});

export const searchClient = typesenseInstantsearchAdapter.searchClient;

const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

class SearchInputBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            beta: '',
            cookie: '',
            hasInput: false,
            refresh: false,
            searchQuery: ''
        };

        this.debouncedSearch = debounce(this.handleSearch, 300);
    }

    onClickOut = (event) => {
        const searchInput = document.getElementsByClassName(
            'ais-SearchBox-input',
        )[0].value;
        const domNode = ReactDOM.findDOMNode(this);
        if (searchInput === '' || !domNode || !domNode.contains(event.target))
            this.setState({ hasInput: false });
    }

    handleKeyUp = (event) => {
        const query = event.currentTarget.value;
        this.setState({
            hasInput: query.length > 2,
        });

        this.setState({ searchQuery: '' }, () => {
            this.debouncedSearch(query);
        });
    }

    handleSearch = (query) => {
        console.log('Searching for:', query);
        this.setState({ 
            refresh: !this.state.refresh,
            searchQuery: query
        });
    }

    render() {
        const {
            refresh, hasInput, searchQuery
        } = this.state;
        return (
            <>
                <div className={!hasInput ? 'form-inline flex w-1/5 items-center pl-4' : 'form-inline flex w-1/5 items-center pl-4 float-searchBox'}>
                    <label htmlFor="search-lc" />

                    <ClickOutHandler onClickOut={this.onClickOut}>
                        <InstantSearch
                            searchClient={searchClient}
                            indexName={process.env.TYPESENSE_COLLECTION}
                            refresh={refresh}
                        >
                            <Configure hitsPerPage={10} />

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
                                onKeyUp={this.handleKeyUp}
                            />

                            <div className={!hasInput ? 'input-empty' : 'absolute bg-white search_results border'}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            {searchQuery && <SearchHits hitComponent={Hits} />}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {searchQuery && <Pagination />}
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
