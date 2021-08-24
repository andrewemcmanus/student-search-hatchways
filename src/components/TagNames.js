import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { createFilter } from "react-search-input";
import { setTags } from './SearchBars'

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
// INCOMING FORMATS OF TAGS AND FILTEREDTAGS ARE DIFFERENT
export default function TagNames({ student, tagSearchTerm }) {
    const [tags, setTags] = useState([{"id":"1","text":"tag10"},{"id":"2","text":"tag20"},{"id":"3","text":"tag30"},{"id":"4","text":"tag40"},{"id":"5","text":"tag50"}]);
    const KEYS_TO_TAG_FILTERS = ['text'];
    const [ localFilteredTags, setlocalFilteredTags ] = useState();
    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    // console.log(tags);
    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    const onClearAll = () => {
        setTags([]);
    };

    const onTagUpdate = (i, newTag) => {
        const updatedTags = tags.slice();
        updatedTags.splice(i, 1, newTag);
        setTags(updatedTags);
    };

    const handlelocalFilteredTags = (tags, tagSearchTerm) => {
        useEffect(() => {
            const incomingInput = () => {
                setlocalFilteredTags(tags.filter(createFilter(tagSearchTerm, KEYS_TO_TAG_FILTERS)));
            }
            incomingInput();
        }, []);
        console.log(localFilteredTags);
        if (tagSearchTerm) {
            return localFilteredTags;
        }
    };
    handlelocalFilteredTags(tags, tagSearchTerm);

    return (
        <div>
        <ReactTags
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            // handleDrag={handleDrag}
            delimiters={delimiters}
            // handleTagClick={handleTagClick}
            onClearAll={onClearAll}
            onTagUpdate={onTagUpdate}
            // suggestions={[{"id":"1","text":"Albania"},{"id":"2","text":"Australia"},{"id":"3","text":"France"},{"id":"4","text":"India"},{"id":"5","text":"Oman"},{"id":"6","text":"Russia"},{"id":"7","text":"Serbia"},{"id":"8","text":"Swaziland"},{"id":"9","text":"United States of America"},{"id":"10","text":"Vietnam"}]}
            placeholder="Add a tag..."
            minQueryLength={2}
            maxLength={10}
            autofocus={false}
            allowDeleteFromEmptyInput={true}
            autocomplete={true}
            readOnly={false}
            allowUnique={true}
            allowDragDrop={true}
            inline={true}
            allowAdditionFromPaste={true}
            editable={true}
            clearAll={true}
            tags={localFilteredTags}
        />
        </div>
    );
};