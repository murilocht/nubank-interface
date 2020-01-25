import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  const tabItems = [
    {id: 1, icon: 'person-add', text: 'Indicar amigos'},
    {id: 2, icon: 'smartphone', text: 'Recarga de celular'},
    {id: 3, icon: 'chat-bubble-outline', text: 'Cobrar'},
    {id: 4, icon: 'arrow-downward', text: 'Depositar'},
    {id: 5, icon: 'arrow-upward', text: 'Transferir'},
    {id: 6, icon: 'dns', text: 'Ajustar limite'},
    {id: 7, icon: 'help-outline', text: 'Me ajuda'},
    {id: 8, icon: 'line-weight', text: 'Pagar'},
    {id: 9, icon: 'lock', text: 'Bloquear cartão'},
    {id: 10, icon: 'credit-card', text: 'Cartão virtual'},
    {id: 11, icon: 'sort', text: 'Organizar atalhos'},
  ];

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 460],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        {tabItems.map(tabItem => (
          <TabItem key={tabItem.id}>
            <Icon name={tabItem.icon} size={24} color="#FFF" />
            <TabText>{tabItem.text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
}
