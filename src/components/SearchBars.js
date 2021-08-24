import React, { useState } from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import styled from 'styled-components';
import Students from './Students';
 
// import emails from './mails'

const SearchBarStyle = styled.div`
.search-input {
    padding: 10px 10px;
    height: 52px;
    position: relative;
  }
  
  .search-input::before {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAQJJREFUKBWVkr2uQUEUhf3ET6GRaC5aFRoJKrf1BKpb8SwqovYGXkCj00k0QnRKEYkILYobvpUYmeMMyVnJl7P3mjN7Zu9zwiGv2qRFyMMSRrAFp6JPN8XzBj+wgDkUYAg7WINTYdwpDECxrRLJHeq2accdkgm8bzTvNAg2EDOGeUYI1KNO1gkuzTA1g8T7ojbn4ONQWPuHPWgeHmnzCqoe15tkSNPgPEAn68oVcOmA2XMtGK9FoE/VhOTTVNExqLCGZnxCv2pYauEC6lF0oQxX6IOvb7yX9NPEQafan+aPXDdQC18LsO6Tip5BBY6gIQaSbnMCFRCBZRcIvFkbsvCr4AFGOCxQy+JdGQAAAABJRU5ErkJggg==');
    display: block;
    position: absolute;
    width: 15px;
    z-index: 3;
    height: 15px;
    font-size: 20px;
    top: 11px;
    left: 16px;
    line-height: 32px;
    opacity: 0.6;
  }
  
  .search-input > input {
    width: 100%;
    font-size: 18px;
    border: none;
    line-height: 22px;
    padding: 5px 10px 5px 25px;
    height: 32px;
    position: relative;
  }
  
  .search-input > input:focus {
    outline: none;
  }

`

export default function SearchBars({ students }) {
    const [ filteredStudents, setFilteredStudents ] = useState(students);
    const [ searchTerm, setSearchTerm ] = useState();
    const [ tagSearchTerm, setTagSearchTerm ] = useState('a');
    const KEYS_TO_FILTERS = ['firstName', 'lastName', 'company', 'email', 'skill'];
    
    return (
        <SearchBarStyle>
        <SearchInput className="search-input" onChange={(e) => {
            setSearchTerm(e);
            if (searchTerm) { 
                setFilteredStudents(students.filter(createFilter(searchTerm, KEYS_TO_FILTERS)));
                return filteredStudents;
            };
            if (!searchTerm) {
                setFilteredStudents(students);
                return filteredStudents;
            }
            }} caseSensitive="false" fuzzy="true" />
        <SearchInput className="search-input" onChange={(e) => {
            setTagSearchTerm(e);
            }} caseSensitive="false" fuzzy="true" />
        <Students filteredStudents={filteredStudents} tagSearchTerm={tagSearchTerm} />
        </SearchBarStyle>
    )
}