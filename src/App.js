import React from 'react';
import TopNavigation from '../src/components/TopNavigation';
import Toaster from '../src/components/Toaster';
import LoaderCircle from '../src/components/LoaderCircle';


const App = () => {
    
    return (
        <div>
		<TopNavigation />
        <Toaster />
        <LoaderCircle />
        </div>
    )
}

export default App
