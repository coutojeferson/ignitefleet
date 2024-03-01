import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';
import theme from '../../theme';

type Props = TextInputProps & {
  label: string;
};
export function LicensePlateInput({ label, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={theme.COLORS.GRAY_400}
        {...rest}
      />
    </Container>
  );
}
