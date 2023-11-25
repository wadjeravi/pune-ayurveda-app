import React from "react";
import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import styles from "./categories.style";
import img1 from '../../../assets/images/vitaminB12.jpg';
import img2 from '../../../assets/images/herbalance.jpg';
import img3 from '../../../assets/images/greenTea.jpg';
import img4 from '../../../assets/images/vitaminB12.jpg';

const staticImages = [
    { id: '1', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '2', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
    { id: '3', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
    { id: '4', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '5', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '6', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
    { id: '7', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
    { id: '8', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '9', uri: img1, originalPrice: '$100', discountPrice: '$50', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
    { id: '10', uri: img2, originalPrice: '$200', discountPrice: '$100', name: 'Herbalance', description: '50g', discount: "50% Off" },
    { id: '11', uri: img3, originalPrice: '$300', discountPrice: '$150', name: 'GreenTea', description: '80g', discount: "50% Off" },
    { id: '12', uri: img4, originalPrice: '$400', discountPrice: '$200', name: 'VitaminB12', description: '30 capsules', discount: "50% Off" },
];

const Categories = () => {
    const renderGridItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardName}>{item.name}</Text>
            <View style={{marginTop:10}}></View>
            <Image source={item.uri} style={styles.cardImage} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explore By Categories</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    data={staticImages}
                    renderItem={renderGridItem}
                    keyExtractor={(item) => item.id}
                    numColumns={4} // Set the number of columns as per your grid layout
                />
            </View>
        </View>
    );
};

export default Categories;