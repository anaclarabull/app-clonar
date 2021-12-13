import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

function Feed (){

    const posts = [
        {
            id: '1',
            author: 'mcpozedorodo',
            picture_url: 'https://i.pinimg.com/564x/31/ee/28/31ee282728c8538ff4c3670c4e31ae75.jpg',
            likes: '',
            description: '',
            hashtags: '',
            place: 'Complexo do Rodo'
        }
        
    ];

    function randerItem({ item: post }) {
        return (
            <View>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>
                    <View>
                        <Image style={styles.picture_url} source={{uri: post.picture_url}}/>
                    </View>
                    <View style={styles.postOptions}>

                    </View>

                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={randerItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    postHeader: {

    },
    postOptions: {

    },
    userInfo: {

    },
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    place: {

    },
    picture_url: {
        width: '100%',
        height: 400,
    },
})

export default Feed;