import React, {useEffect, useState} from 'react'
import TagList from './TagList';

const TagsDisplay = ({ tags }) => {
    if (tags === null) return;

    
    const [sortedTags, setSortedTags] = useState([]);
    useEffect(() => {
        setSortedTags([...tags].sort(function (a, b) {
            return a.tagname.localeCompare(b.tagname);
        }));
    }, [])

    return (
        <div className="row">
            {tags.length ? (
                <TagList tags={ sortedTags } />
            ) : (
                <p>You have not followed any tags.</p>
            )}
        </div>
    )
}

export default TagsDisplay