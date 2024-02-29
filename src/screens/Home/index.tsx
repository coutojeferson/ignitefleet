import { useNavigation } from '@react-navigation/native';
import { HomeHeader } from '../../components/HomeHeader';
import { Container, Content } from './styles';
import { CarStatus } from '../../components/CarStatus';

export function Home() {
  const { navigate } = useNavigation();

  function handleRegisterMovement() {
    navigate('departure');
  }
  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus licensePlate="XXX-0000" onPress={handleRegisterMovement} />
      </Content>
    </Container>
  );
}
