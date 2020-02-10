import React from 'react';
import LoaderSrc from  '../../Assets/loader.gif';

export default function Loader(props) {
    return (
        <div>
            <img
                style={{ width: 25 }}
                alt="Loader Icon"
                src={LoaderSrc}
            />
        </div>
    );
}