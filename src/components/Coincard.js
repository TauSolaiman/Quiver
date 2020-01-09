import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { images } from '../utils/CoinIcons'


const CoinCard = (props) => {
 
   const  { symbol, coin_name, price_usd, percent_change_24h, percent_change_7d, total_supply } = props
   
    return (
        <View style={container}>
            <View style={upperRow}>
                <Image
                    style={image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>$ {price_usd}</Text>
            </View>

            <View style={statisticsContainer}>
                <Text>
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }>
                         24h: {percent_change_24h} % </Text>
                </Text>
                <Text>
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> 
                    7d: {percent_change_7d} % </Text>
                </Text>
            </View>

            <View>
                 <Text style={bold}> Total Supply: </Text>
                 <Text style={bold}> {formatNumber(total_supply)}</Text>
            </View>
        </View> 
    );
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 40,
        borderBottomColor: "#00BFA5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 40
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        color: "#00BFA5",       
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: "#00BFA5",
    },
    seperator: {
        marginTop: 10,
        color: "#00BFA5", 
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
        color: "#00BFA5",        
    },
    image: {
        width: 35,
        height: 35,
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#00BFA5",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#ed5f5f",
        fontWeight: "bold",
        marginLeft: 5
    },
    bold: {
        fontWeight: "bold",
        marginTop: 10,
        color: "#00BFA5",
    }
})

const { 
    container,
    image,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus,
    bold
} = styles;


export default CoinCard;
