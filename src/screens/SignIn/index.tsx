import { useEffect, useState } from 'react';
import { Container, Title, Slogan } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env';
import { Alert } from 'react-native';
import { Realm, useApp } from '@realm/react';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const app = useApp();

  async function handleGoogleSignin() {
    try {
      setIsAuthenticating(true);
      const { idToken } = await GoogleSignin.signIn();
      if (idToken) {
        const credentials = Realm.Credentials.jwt(idToken);
        await app.logIn(credentials);
      } else {
        Alert.alert(
          'Entrar',
          'Não foi possível conectar-se a sua conta google.',
        );

        setIsAuthenticating(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticating(false);
      Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.');
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Iginite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title="Entrar com Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignin}
      />
    </Container>
  );
}
