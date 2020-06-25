import React from "react";
import './car-list.styles.scss';

import Card from '../card/card.component.jsx'

const Cardlist = (props) => {

    return <div className= 'card-list'>
    
    {
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />))
    }
      </div>
}

export default Cardlist;