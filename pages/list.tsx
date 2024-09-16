import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';


const Lists = ({ navigation  }: any) => {
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handlePress = (itemId: any) => {
        setSelectedItem(itemId);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.head}>
            <List.Section>

                <List.Item
                    title="First Item"
                    description="myy name is anthony aaaaaaaaaaaaaaaaaaaaaaaaaaaa "
                    descriptionNumberOfLines={2}
                    left={() => <List.Icon icon="folder" />}
                    style={selectedItem === 'item1' ? styles.selectedItem : styles.item}
                    onPress={() => handlePress('item1')}
                />

                <List.Item
                    title="Second Item"
                    description="myy name is anthony aaaaaaaaaaaaaaaaaaaaaaaaaaaa "
                    descriptionNumberOfLines={2}
                    left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                    style={selectedItem === 'item2' ? styles.selectedItem : styles.item}
                    onPress={() => handlePress('item2')}
                />
                
                <List.Item
                    title="Third Item"
                    description="myy name is anthony aaaaaaaaaaaaaaaaaaaaaaaaaaaa "
                    descriptionNumberOfLines={3}
                    left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                    style={selectedItem === 'item3' ? styles.selectedItem : styles.item}
                    onPress={() => handlePress('item3')}
                />
                
            </List.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        marginLeft: 5,
        marginRight: 5,
    },
    searchbar: {
        margin: 10,
    },

    item: {
        backgroundColor: 'white',
        borderRadius: 118,
        paddingVertical: 10,
        marginTop: 4,
        marginBottom: 4,

    },
    selectedItem: {
        backgroundColor: MD3Colors.primary90,
        borderRadius: 118,
        paddingVertical: 10,

    },
});

export default Lists;
