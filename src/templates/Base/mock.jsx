import linksMock from '../../components/NavLinks/mock';
import { GridText } from '../../components/GridText';
import gridTextMock from '../../components/GridText/mock';

export default {
  children: (
    <>
      <GridText {...gridTextMock} hasBackground />
      <GridText {...gridTextMock} />
      <GridText {...gridTextMock} hasBackground />
      <GridText {...gridTextMock} />
      <GridText {...gridTextMock} hasBackground />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'LogoLink',
    link: '#home',
  },
  footerContent: '<p>Obrigado por acessar</p>',
};
