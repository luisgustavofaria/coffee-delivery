import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { Container } from '../../components/Container/styles';
import { Header } from '../../components/Header';
import {
  ConstainerInfo,
  ConstainerInfoImage,
  ConstainerInfoText,
  InfoIcons,
  InfoText,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ConstainerInfo>
        <ConstainerInfoText>
          <InfoText>
            <span>Encontre o café perfeito para qualquer hora do dia</span>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </InfoText>
          <InfoIcons>
            <div>
              <div>
                <ShoppingCart
                  size={32}
                  color="#FAFAFA"
                  weight="fill"
                  style={{ backgroundColor: '#C47F17' }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer
                  size={32}
                  color="#FAFAFA"
                  weight="fill"
                  style={{ backgroundColor: '#DBAC2C' }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div>
              <div>
                <Package
                  size={32}
                  color="#FAFAFA"
                  weight="fill"
                  style={{ backgroundColor: '#574F4D' }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  color="#FAFAFA"
                  weight="fill"
                  style={{ backgroundColor: '#8047F8' }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </InfoIcons>
        </ConstainerInfoText>
        <ConstainerInfoImage>
          <img src="/images/hero.svg" alt="hero-bg" />
        </ConstainerInfoImage>
      </ConstainerInfo>
    </Container>
  );
}
