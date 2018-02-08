import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const {
    thumbnail_image,
    title,
    artist,
    image,
    url
  } = props.albumInfo;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    albumArtStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={albumArtStyle} />
      </CardSection>

      <CardSection>
        <Button text={'Buy Now'} onPress={() => Linking.openURL(url)} />
      </CardSection>
    </Card>
  );
};

  const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    albumArtStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };

/* AlbumDetail class based component
class AlbumDetail extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.albumInfo.title}</Text>
      </View>
    );
  }
}*/

export default AlbumDetail;
