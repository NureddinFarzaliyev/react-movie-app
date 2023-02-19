import React from 'react'
import Popular from '../components/popular'
import Toprated from '../components/top-rated'
import Upcoming from '../components/upcoming'
import Playing from '../components/playing'

function pages() {
    return (
        <>
            <Popular />
            <Toprated />
            <Upcoming />
            <Playing />
            {/* Now playing */}
        </>
    )
}

export default pages