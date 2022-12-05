// import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, id) => {
        return <Card monster={monster} key={id} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;