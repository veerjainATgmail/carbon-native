import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemIcon,
} from '../src/index.js';

const cs = StyleSheet.create(carbonStyles);

const navigationItems = [
  { name: 'Badge', icon: 'certificate' },
  { name: 'Buttons', icon: 'circle' },
  { name: 'Card', icon: 'clone' },
  { name: 'Lists', icon: 'list' },
  { name: 'Range', icon: 'sliders' },
  { name: 'Toggle', icon: 'toggle-on' },
  { name: 'Toolbars', icon: 'bars' },
  { name: 'Typography', icon: 'font', lastItem: true },
];

export default function MainMenu(props) {
  const { navigate } = props.navigation;

  return (
    <Content>
      <List>
        {navigationItems.map((item, index) => (
          <Item key={index} onPress={() => navigate(item.name)}>
            <ItemIcon>
              <Icon name={item.icon} size={24} />
            </ItemIcon>
            <ItemContent style={item.lastItem && cs.itemLast}>
              <ItemText>{item.name}</ItemText>
            </ItemContent>
          </Item>
        ))}
      </List>
    </Content>
  );
}