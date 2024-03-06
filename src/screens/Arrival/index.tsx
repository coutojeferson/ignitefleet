import React from 'react';
import {
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { X } from 'phosphor-react-native';

type RouteParamsProps = {
  id: string;
};

export function Arrival() {
  const route = useRoute();
  const { id } = route.params as RouteParamsProps;

  return (
    <Container>
      <Header title="Chegada" />
      <Content>
        <Label>Placa do veículo</Label>
        <LicensePlate>XX00000</LicensePlate>
        <Label>Finalidade</Label>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          excepturi quidem animi sequi magnam veritatis recusandae ullam
          reiciendis nihil magni, rerum praesentium officiis, aliquam quam.
          Doloribus ipsam amet magnam possimus.
        </Description>
        <Footer>
          <ButtonIcon icon={X} />
          <Button title="Registrar Chegada" />
        </Footer>
      </Content>
    </Container>
  );
}
