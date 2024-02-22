import { Container, Title, Slogan } from './styles';
import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Iginite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title="Entrar com Google" />
    </Container>
  );
}
