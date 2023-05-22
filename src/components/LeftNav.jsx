/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';
import book from './images/book.png';


const { v4: uuidv4 } = require('uuid');

let slugs;

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        const { data, isRoot, identifier } = this.props;
        this.state = {
            data,
            isRoot,
            identifier,
            active: [],
            currentUrl: '',
            expandedPanels: [], // Initialize expandedPanels state as an empty array
        };
        this.toggleActive = this.toggleActive.bind(this);
        this.toggleExpansion = this.toggleExpansion.bind(this); // Bind toggleExpansion method
    }

    componentDidMount() {
        this.setState({ currentUrl: window.location.pathname });
    }

    setActive = (name) => {
        const { active, expandedPanels } = this.state;
        if (active.indexOf(name) === -1) {
            this.setState((prev) => ({ active: [...prev.active, name] }));

            if (!expandedPanels.includes(name)) { // Check if name is already in expandedPanels
                this.setState((prev) => ({ expandedPanels: [...prev.expandedPanels, name] }));
            }
        }
    };

    toggleExpansion(identifier) {
        const { expandedPanels } = this.state;
        if (expandedPanels.includes(identifier)) {
            const updatedExpandedPanels = expandedPanels.filter((panel) => panel !== identifier);
            this.setState({ expandedPanels: updatedExpandedPanels });
        } else {
            this.setState((prev) => ({ expandedPanels: [...prev.expandedPanels, identifier] }));
        }
    }
    
    toggleActive = (e) => {
        let title;
        if (e.target.attributes.identifier) {
            title = e.target.attributes.identifier.value;
        } else if (e.target.nextSibling?.attributes.identifier) {
            title = e.target.nextSibling.attributes.identifier.value;
        }
        const { active } = this.state;
        const titleIndex = active.indexOf(title);
        if (titleIndex !== -1) {
            active.splice(titleIndex, 1);
            this.setState({ active });
        } else {
            this.setActive(title);
        }
    } // toggles list item as active or inactive based on previous state. Triggered on click

    isActive = (name) => {
        const { active } = this.state;
        return active.includes(name);
    }

    inUrl = (url) => {
        const { currentUrl } = this.state;
        return currentUrl.includes(url);
    }

    child = (data, url) => {
        const name = slugs.filter((val) => url === val.fields.slug);
        const { title } = name[0].frontmatter;
        return ( url.indexOf("/overview/") === -1 &&
            <li data-parent={this.state.identifier} data-url={url} key={`${data.leftNavTitle || title}-${uuidv4()}`} className={`child${this.inUrl(url) ? ' currentUrl text_green' : ''}`}>
                <div className="activeIndicator" />
                <img src={book} alt="book"/>
                <Link to={url}>{data.leftNavTitle || title}</Link>
            </li>
        );
    } // Renders child element. Gets name from slugs array

    parent = (data, name) => {
        const { active, isRoot } = this.state;
        if (this.inUrl(`/${this.state.identifier || 'docs'}/${name}/`)) {
            this.setActive(name);
        }
        // Appending overview page link to Parent node (which has arrow icon with title)
        // Instead of having overview as a separate link.
        let overviewLink = null;
        Object.keys(data).reverse().map(key => {
            if (data.hasOwnProperty('overview')) {
                if (data['overview'].url.indexOf(`/${name}/overview/`) !== -1)
                    overviewLink =  data['overview'].url;
            }
            else if (data[key].hasOwnProperty('overview')) {
                if (data[key]['overview'].url.indexOf(`/${name}/overview/`) !== -1)
                    overviewLink = data[key]['overview'].url;
            } else {
                overviewLink  = data [key].url;
            }
        })

        return (
            <ul
                key={`${name}-${uuidv4()}`}
                className={` ${(this.state.expandedPanels?.indexOf(name) !== -1) ? 'active' : 'inactive'} ${isRoot ? ' root' : ''} `}
            >
                <li data-parent={this.state.identifier} className={`parent${this.inUrl(`/${this.state.identifier || 'docs'}/${name}/`) ? ' currentUrl text_green' : ''}`} onClick={this.toggleActive} identifier={name}>
                    <svg onClick={(e)=>{this.toggleActive(e); this.toggleExpansion(name)}} identifier={name} className={`inline float_left relative folder-icon parent_caret${(this.state.expandedPanels?.indexOf(name) !== -1) ? ' active_parent_caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24"
                         viewBox="0 0 24 24" width="24">
                        <path clipRule="evenodd"
                              d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z"
                              fill="#333333" fillRule="evenodd">

                        </path>
                    </svg>
                    <svg onClick={(e)=>{this.toggleActive(e); this.toggleExpansion(name)}} identifier={name} className={`-mr-3 inline caret${this.isActive(name) ? ' active-caret' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z" fill="#333333" fillRule="evenodd" /></svg>
                    { overviewLink && (<Link to={overviewLink} onClick={this.toggleActive} identifier={name}>{ data.leftNavTitle || name.replace(/-/g, ' ')} </Link>) }
                    { !overviewLink && (<button type="button" onClick={this.toggleActive} identifier={name}>
                        {data.leftNavTitle || name.replace(/-/g, ' ')}
                    </button>)}
                </li>
                <ListItem data={JSON.stringify(data)} identifier={name}/>
            </ul>
        );
    } // renders parent element that has children

    render() {
        const { data } = this.state;
        const parsedData = JSON.parse(data);
        const keys = Object.keys(JSON.parse(data)).map((val) => val);
        return (
            <>
                {keys.map((val) => {
                    if(val !== 'leftNavTitle' && val !== "old") {
                        if (parsedData[val].url) {
                            return this.child(parsedData[val], parsedData[val].url);
                        }
                        return this.parent(parsedData[val], val);
                    }
                })}
            </>
        );
    }
}

const LeftNav = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: id, order: ASC}) {
        nodes {
          fields {
            slug 
          }
          frontmatter {
            title
          }
          id
        }
      },
      leftNavLinks {
        value
      }
    }`);
    slugs = data.allMarkdownRemark.nodes;
    return (
        <>
            <div className="leftNav bg-gray-50 px-14 pt-5">
                <ListItem data={data.leftNavLinks.value} isRoot />
            </div>
        </>
    );
};

export default LeftNav;
/* eslint-enable */
