import React, {useState} from 'react';
import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

function Filters({setFilter}) {

    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value);
    const [tags, setTags] = useState(TAGS[0].value);
    const [sortBy, setSortBy] = useState(SORT_BY[0].value);

    function handlePlatform(e) {
        setPlatform(e.target.value);
        setFilter((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    function handleGenre(e) {
        setGenre(e.target.value);
        setFilter((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    function handleTags(e) {
        setTags(e.target.value);
        setFilter((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    function handleSortBy(e) {
        setSortBy(e.target.value);
        setFilter((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <label htmlFor="platform">Platform: </label>
            <select
                name="platform"
                id="platform"
                value={platform}
                onChange={handlePlatform}
            >
                {PLATFORMS.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="genre">Genre: </label>
            <select
                name="genre"
                id="genre"
                value={genre}
                onChange={handleGenre}
            >
                {GENRES.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="tags">Tags: </label>
            <select
                name="tags"
                id="tags"
                value={tags}
                onChange={handleTags}
            >
                {TAGS.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="sort_by">Sort by: </label>
            <select
                name="sortBy"
                id="sortBy"
                value={sortBy}
                onChange={handleSortBy}
            >
                {SORT_BY.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>
        </>
    )
}

export default Filters;