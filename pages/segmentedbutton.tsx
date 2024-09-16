import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import Lists from './list';
import Flatlist from './flatlist';

const SegmentedButton = ({navigation }:any) => {
    const [value, setValue] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');

    const renderContent = () => {
        switch (value) {
            case 'All':
                return <Lists navigation={navigation}></Lists>
            case 'Watch':
                return <Flatlist/>;
            case 'Gainers':
                return <Text style={styles.content}>You selected Driving!</Text>;
            case 'Lossers':
                return <Text style={styles.content}>You selected Driving!</Text>;
            default:
                return <Text style={styles.content}>Please select an option.</Text>;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <SegmentedButtons
                style={styles.container1}
                value={value}
                onValueChange={setValue}

                buttons={[
                    {
                        value: 'All',
                        label: 'All',

                    },
                    {
                        value: 'Watch',
                        label: 'Watch-List',
                    },
                    {
                        value: 'Gainers',
                        label: 'Gainers'
                    },
                    {
                        value: 'Lossers',
                        label: 'Lossers'
                    },
                ]}
            />
            <View style={styles.contentContainer}>
                {renderContent()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    container1: {
        padding: 2,
    },
    contentContainer: {
        marginTop: 1,
    },
    content: {
        fontSize: 18,
        color: 'black',
    },
});

export default SegmentedButton;