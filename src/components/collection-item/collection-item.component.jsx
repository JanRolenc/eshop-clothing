import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';//toto pridavame pri funkcionalite klik na tlacitko Add to chart
import { addItem } from '../../redux/cart/cart.actions';//toto pridavame pri funkcionalite klik na tlacitko Add to chart

// const CollectionItem = ({ id, name, imageUrl, price, addItem }) => {//po zmenach v collection preview dle 128./7.45m se provedou zmeny i tady
//pry potrebujeme pristup k cele item, ne jen k vlastnostem
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            {/* <CustomButton inverted>Add to chart</CustomButton> po zmenach v collection preview dle 128./7.45m*/}
            <CustomButton onClick={() => addItem(item)} inverted>Add to chart</CustomButton>
        </div>

    );
}
//toto pridavame pri funkcionalite klik na tlacitko Add to chart
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

// export default CollectionItem;//toto menime pri funkcionalite klik na tlacitko Add to chart
export default connect(null, mapDispatchToProps)(CollectionItem);