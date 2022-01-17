import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview' >
            {items//toto se bude neustale menit/znovu nacitat pri kazdem render/refresh
                .filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}

        </div>
    </div>

)

export default CollectionPreview;