const React = require('react');
import Menu from './Menu.jsx';
import './Album.scss';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
  }
  handleRightClick(e) {
    e.preventDefault();
    this.setState({ menuShow: !this.state.menuShow });
  }
  render() {
    return (
      <div>
        <Menu show={this.state.menuShow} />
        <div
          className="albumContainer"
          data-test="containerComponent"
          onContextMenu={this.handleRightClick.bind(this)}
        >
          <div className="picContainer">
            <img
              className="albumArt"
              src={this.props.picURL}
              alt="stuff"
              data-test="picComponent"
            />
            <img
              src="https://i2.wp.com/orangecountybookkeepers.com/wp-content/uploads/2016/02/play-button-overlay.png"
              className="playbutton"
            />
          </div>
          <div className="albumText" data-test="albumTextComponent">
            {this.props.name}
          </div>
          <div className="albumText artistNameAlbum" data-test="artistNameComponent">
            {this.props.artistName}
          </div>
        </div>
      </div>
    );
  }
}

// const Album = props => {
//   return (
//     <div className="albumContainer" data-test="containerComponent">
//       <div className="picContainer">
//         <img className="albumArt" src={props.picURL} alt="stuff" data-test="picComponent" />
//         <img
//           src="https://i2.wp.com/orangecountybookkeepers.com/wp-content/uploads/2016/02/play-button-overlay.png"
//           className="playbutton"
//         />
//       </div>
//       <div className="albumText" data-test="albumTextComponent">
//         {props.name}
//       </div>
//       <div className="albumText artistNameAlbum" data-test="artistNameComponent">
//         {props.artistName}
//       </div>
//     </div>
//   );
// };
export default Album;
