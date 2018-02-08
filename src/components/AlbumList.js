import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  /*global state*/
  state = { albums: [] };
  componentWillMount() {
    console.log('component will mount in AlbumList');
    //axios.get('');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} albumInfo={album} />);
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
