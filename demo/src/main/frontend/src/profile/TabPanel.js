import React from 'react'

const TabPanel = ({children, tab, index}) => {

    return (
        <div>{
            tab === index && (
                <h1>{children}</h1>
            )
        }</div>
    )
}

export default TabPanel