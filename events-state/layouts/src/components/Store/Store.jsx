import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import './Store.css';

const Store = (props) => {
  const {products} = props;
  const [viewType, setViewType] = useState('view_list');

  return (
    <div className={'store'}>
      <div className={'store__view-icon-box'}>
        <IconSwitch icon={viewType} onSwitch={() => {
          setViewType(prevType => prevType === 'view_list' ? 'view_module' : 'view_list')
        }}/>
      </div>
      {viewType === 'view_list' ? <ListView items={products}/> : <CardsView cards={products}/>}
    </div>
  );
};

Store.propTypes = {
  products: PropTypes.array.isRequired
};

export default Store;