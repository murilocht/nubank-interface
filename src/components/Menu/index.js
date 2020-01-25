import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  AccountDescription,
  Strong,
  AccountDescritionText,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  const navItems = [
    {id: 1, icon: 'help-outline', text: 'Me ajuda'},
    {id: 2, icon: 'person-outline', text: 'Perfil'},
    {id: 3, icon: 'attach-money', text: 'Configurar NuConta'},
    {id: 4, icon: 'credit-card', text: 'Configurar cartão'},
    {id: 5, icon: 'home', text: 'Pedir conta PJ'},
    {id: 6, icon: 'smartphone', text: 'Configurações do app'},
  ];

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 560],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://github.com/murilocht"
          logoSize={80}
          logoBackgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>

      <AccountDescription>
        <AccountDescritionText>
          Banco <Strong>260 - Nu Pagamentos S.A.</Strong>
        </AccountDescritionText>
        <AccountDescritionText>
          Agência <Strong>0001</Strong>
        </AccountDescritionText>
        <AccountDescritionText>
          Conta <Strong>12345678-9</Strong>
        </AccountDescritionText>
      </AccountDescription>

      <Nav>
        {navItems.map(navItem => (
          <NavItem key={navItem.id}>
            <Icon name={navItem.icon} size={20} color="#FFF" />
            <NavText>{navItem.text}</NavText>
          </NavItem>
        ))}
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
