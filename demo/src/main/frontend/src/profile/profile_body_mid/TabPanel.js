import React from 'react'

const TabPanel = ({children, tab, index}) => {

    return (
        <div>{
            tab === index && (
                <>{children}</>
            )
        }</div>
    )
}

export default TabPanel 