import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background-color: #EAEDBE;
`
export const Card = styled.View`
    width: 90%;
    height: 70%;
    background-color: #FDFFE6;
    align-self: center;
    margin: auto;
    border-radius: 10px;
    border-color: #6A6E37;
    border-width: ${StyleSheet.hairlineWidth}px;
`

export const CaptureBar = styled.TouchableOpacity`
    align-self: center;
    margin-bottom: 40px;
    flex-direction: row;
    align-items: center;
`

export const Capture = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #6A6E37;
    margin-right: 5px;
`

export const Back = styled.TouchableOpacity`
    margin-top: 25px;
    margin-left: 15px;
    flex-direction: row;
    align-items: center;
`

export const BackText = styled.Text`
    font-size: 15px;
    color: #6A6E37;
`


export const Name = styled.Text`
    font-size: 25px;
    color: #6A6E37;
    margin-left: 20px;
    margin-top: 15px;

`

export const Icon = styled.Image`
    width: 200px;
    height: 200px;
    align-self: center;
`

export const Weight = styled.Text`
    margin-left: 20px;
    font-size: 16px;
    color: #6C6E58;
`

export const Stats = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5px;
`

export const Stat = styled.Text`
    padding: 4px;
    margin: 2px;
    font-size: 15px;
    color: #6C6E58;
    font-weight: 500;
    border-color: #6A6E37;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-radius: 5px;
`

export const MoveTitle = styled.Text`
    margin-left: 20px;
    color: #6C6E58;
`

export const Movebar = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    background-color: #9DA170;
    border-radius: 5px;
`

export const MoveItem = styled.Text`
    font-weight: 500;
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 5px;
    color: #FDFFE6; 
`