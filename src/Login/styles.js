import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex: 1;
    background-color: #EAEDBE;
`

export const Header = styled.View`
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    height: 55px;
    width: 150px;
`

export const Form = styled.View`
    align-self: center;
    margin-top: 40px;

  
`

export const Label = styled.Text`
    font-size: 16px;
    color: #6A6E37;
    font-weight: 300;
`

export const Input = styled.TextInput`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: #6C6E58;
    padding: 15px;
    width: 200px;
    border-radius: 20px;
    margin: 10px;
    color: #6A6E37;
    font-weight: 500;
`

export const Footer = styled.View`
    align-self: center;
    margin-top: 60px;
`

export const BottomRegister = styled.TouchableOpacity`
    background-color: #6A6E37;
    padding: 15px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
`

export const Register = styled.Text`
    color: #EAEDBE;
    font-size: 16px;
`

export const BottomOptionsDisable = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: #6A6E37;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Options = styled.Text`
    color: #6A6E37;
    font-size: 16px;
`
export const OptionsBar = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 10px;
`
export const BottomOptionsAble = styled.TouchableOpacity`
    background-color: #6A6E37;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const OptionsAble = styled.Text`
    color: #EAEDBE;
    font-size: 16px;
`