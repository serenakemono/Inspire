import React, { useState } from 'react'
import TagCard from './TagCard'

const TagList = ({ tags }) => {

    return (
        <>{tags.map((tag) => {
            const [hasFollowed, setHasFollowed] = useState(true);
            return (
                <TagCard
                    tag={tag}
                    hasFollowed={hasFollowed}
                    setHasFollowed={setHasFollowed}
                />
            )
        }
        )}</>
    )
}

export default TagList