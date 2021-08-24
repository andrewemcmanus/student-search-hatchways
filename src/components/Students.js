import React from 'react';
import Grades from '../scripts/calculateGrades';
import styled from 'styled-components';
import GradesMenu from './GradesMenu';
import TagNames from './TagNames';

// name: uppercase
// google font: Raleway
const Info = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    .name {
        font-family: 'Raleway';
        text-transform: uppercase;
    } 
    img {
        width: 170px;
        float: left;
        border-radius: 80%;
    }  
    .data {
        font-family: 'Raleway';
        text-align: left;
    }
    .grades {
        font-family: 'Raleway';
        text-align: center;
    }
    .ReactTags :global {
        /* Example Styles for React Tags*/
        .app {
        padding: 40px;
        text-align: center;
        }
    
        /* Example Styles for React Tags*/
    
        .container {
        margin: auto;
        width: 50%;
        }
        .ReactTags__tags {
        position: relative;
        }
    
        .ReactTags__clearAll {
        cursor: pointer;
        padding: 10px;
        margin: 10px;
        background: #f88d8d;
        color: #fff;
        border: none;
        }
    
        /* Styles for the input */
        .ReactTags__tagInput {
        border-radius: 2px;
        display: inline-block;
        }
        .ReactTags__tagInput input.ReactTags__tagInputField,
        .ReactTags__tagInput input.ReactTags__tagInputField:focus {
        height: 31px;
        margin: 0;
        font-size: 12px;
        border: 1px solid #eee;
        min-width: 150px;
        }
    
        .ReactTags__editInput {
        border-radius: 1px;
        }
    
        .ReactTags__editTagInput {
        display: inline-flex;
        }
    
        /* Styles for selected tags */
        .ReactTags__selected span.ReactTags__tag {
        border: 1px solid #ddd;
        background: #63bcfd;
        color: white;
        font-size: 12px;
        display: inline-block;
        padding: 5px;
        margin: 0 5px;
        border-radius: 2px;
        }
        .ReactTags__selected span.ReactTags__tag:first-child {
        margin-left: 0px;
        }
        .ReactTags__selected a.ReactTags__remove {
        color: #aaa;
        margin-left: 5px;
        cursor: pointer;
        }
    
        /* Styles for suggestions */
        .ReactTags__suggestions {
        position: absolute;
        top:60px;
        }
        .ReactTags__suggestions ul {
        list-style-type: none;
        box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
        background: white;
        width: 200px;
        }
        .ReactTags__suggestions li {
        border-bottom: 1px solid #ddd;
        padding: 5px 10px;
        margin: 0;
        }
        .ReactTags__suggestions li mark {
        text-decoration: underline;
        background: none;
        font-weight: 600;
        }
        .ReactTags__suggestions ul li.ReactTags__activeSuggestion {
        background: #b7cfe0;
        cursor: pointer;
        }
    
        .ReactTags__remove {
        border: none;
        cursor: pointer;
        background: none;
        color: white;
        }
    }
`

export default function Students({ filteredStudents, tagSearchTerm }) {
        return (
                Object.keys(filteredStudents).map((i) => (
                    <Info key={filteredStudents[i].id}>
                        <div className="data">
                            <img src={filteredStudents[i].pic} alt="student-pic" />
                            <h1 className="name">{filteredStudents[i].firstName} {filteredStudents[i].lastName}</h1>
                            <p><strong>Email:</strong> {filteredStudents[i].email}</p>
                            <p><strong>Company:</strong> {filteredStudents[i].company}</p>
                            <p><strong>Skill:</strong> {filteredStudents[i].skill}</p>
                            <p><strong>Average:</strong> {Grades(filteredStudents[i].grades)}%</p>
                            <div className="ReactTags">
                                <TagNames student={filteredStudents[i]} tagSearchTerm={tagSearchTerm} />
                            </div>
                            <GradesMenu grades={filteredStudents[i].grades} className="grades" />
                        </div>
                    </Info>     
                    )
                )
            )
        }
