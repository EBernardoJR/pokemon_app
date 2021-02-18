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

export const Logout = styled.Text`
    color: #fff;
    font-size: 16px;
`
export const About = styled.Text``

export const AboutView = styled.View`
`
export const LogView = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: #EDA9A6;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 20px;
`
export const ModalView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
`

export const Close = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    
`

export const ClosePress= styled.TouchableOpacity`
     width: 100%;
    height: 100%;
`