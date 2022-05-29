import React, {useState} from 'react';
import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

function Filters({setFilter}) {

    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value);
    const [tags, setTags] = useState(TAGS[0].value);

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
                    <option value={value}>{display}</option>
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
                    <option value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="tags">Tags: </label>
            <select
                name="tags"
                id="tags"
                value={platform}
                onChange={handleTags}
            >
                {TAGS.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>

            <label htmlFor="sort_by">Sort: </label>
            <select
                name="platform"
                id="platform"
                value={platform}
                onChange={handlePlatform}
            >
                {PLATFORMS.map(({value, display}) => (
                    <option value={value}>{display}</option>
                ))}
            </select>
        </>
    )
}

export default Filters;