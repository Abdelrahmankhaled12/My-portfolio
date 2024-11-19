import './style.scss'; // Importing style file
import React, { ReactNode } from 'react';

// Props interface definition
interface EffectProps {
    children: ReactNode;
}

// Effect component definition
const Effect: React.FC<EffectProps> = ({ children }) => {
    return (
        <>
            <div className='effect'>
                <div className="children">
                    {children} {/* Rendering children components */}
                </div>
            </div>
        </>
    );
};

export default Effect; // Exporting Effect component
