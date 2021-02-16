import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background-color: #EAEDBE;
`
export const Header = styled.TouchableOpacity`
    margin-top: 30px;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
`

export const Name = styled.Text`
    font-size: 17px;
    font-weight: 500;
    color: #6A6E37;
    margin-left: 10px;
`
export const Title = styled.Text`
    font-size: 16px;
    font-weight: 300;
    color: #6A6E37;
    margin-left: 20px;
    margin-top: 10px;
`