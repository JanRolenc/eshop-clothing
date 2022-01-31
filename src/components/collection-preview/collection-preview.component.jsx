import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview' >
            {items//toto se bude neustale menit/znovu nacitat pri kazdem render/refresh
                .filter((item, index) => index < 4)
                /* .map(({ id, ...otherItemProps }) => (//z nejakeho duvodu chce od 128./7.45m provest zmeny */
                .map((item) => (
                    /* <CollectionItem key={id} {...otherItemProps} />//z nejakeho duvodu (pry aby se dal cely item dispatch dal, napr. do collection-item)chce od 128./7.45m provest zmeny */
                    <CollectionItem key={item.id} item={item} />
                ))}

        </div>
    </div>

)

export default CollectionPreview;