import * as React from 'react';
import { LogBox, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import CarouselCard from 'react-native-card-carousel'
import Lists from './list';

const items = [
    {
        id: 1,
        title: 'a',
        content: 'a1',
        url: 'https://picsum.photos/200'
    }, {
        id: 2,
        title: 'b',
        content: 'b1',
        url: 'https://picsum.photos/900'
    }
]

function Card1({ navigation }: any): React.JSX.Element {
    React.useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])


    return (
        <ScrollView >
            <View>
                <Text style={styles.header}>Welcome </Text>
                <Text style={styles.name}>Peter jones </Text>
                <View style={styles.container1}>
                    <Card mode='elevated' style={styles.container}>
                        <Card.Cover style={styles.imagestyle} source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                    <Text style={styles.header}>My Portfolio </Text>
                </View>
                <View>
                    <CarouselCard
                        height={150}
                        autoplay
                        interval={4000}
                        data={items}
                        onPress={(item: any) => { }}
                        contentRender={(item: any) => <Card style={styles.container}>
                            {/* <Text>{item?.title}</Text> */}
                            <Card.Cover style={{
                                resizeMode: 'stretch',
                                height: 140,
                                width: 270,
                            }} source={{ uri: item.url }} />
                        </Card>}
                    />
                    <Text style={styles.Curriencies}>Popular Currencies </Text>
                    <Lists navigation={navigation}></Lists>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
        paddingBottom: 3,
        paddingLeft: 20,
        fontSize: 20,
    },
    Curriencies: {
        paddingLeft: 20,
        fontSize: 20,
    },
    name: {
        paddingLeft: 20,
        fontSize: 25,
    },
    imagestylehover: {

    },
    imagestyle: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    container1: {
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,

    },

});

export default Card1;