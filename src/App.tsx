import React from 'react';
import styled from 'styled-components';
import { tokens } from './styles/tokens';
import { H4, Text } from './components/Typography';
import { OrderCard, ItemCard, ActionCard, RewardCard } from './components/Card';
import { Button } from './components/Button';
import { GlobalStyle } from './styles/GlobalStyle';
import { Icon } from './components/Icon';
import { Image } from './components/Image';
import { IMAGES, IMAGE_DIMENSIONS } from './constants/images';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${tokens.colors.background};
  color: ${tokens.colors.textPrimary};
`;

const Header = styled.header`
  position: relative;
  margin-bottom: ${tokens.spacing.space3};
`;

const HeaderImageContainer = styled.div`
  position: relative;
  margin-bottom: ${tokens.spacing.space2};

  @media (max-width: ${tokens.breakpoints.mobile}) {
    margin-bottom: ${tokens.spacing.space3};
  }
`;

const HeaderImage = styled(Image)`
  border-radius: 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(17, 17, 17, 0.7) 0%,
      rgba(17, 17, 17, 0.8) 50%,
      ${tokens.colors.background} 100%
    );
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    pointer-events: none;
    z-index: 1;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${tokens.spacing.space3};
  text-align: center;
  z-index: 2;

  @media (max-width: ${tokens.breakpoints.mobile}) {
    padding: ${tokens.spacing.space2};
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: ${tokens.spacing.space3};
  left: ${tokens.spacing.space3};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.colors.cardBackground};
  border-radius: ${tokens.borderRadius.radius1};
  border: none;
  cursor: pointer;
  color: ${tokens.colors.textPrimary};
  z-index: 2;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (max-width: ${tokens.breakpoints.mobile}) {
    top: ${tokens.spacing.space2};
    left: ${tokens.spacing.space2};
  }
`;

const MainContent = styled.main`
  padding: ${tokens.spacing.space2};
`;

const Section = styled.section`
  margin-bottom: ${tokens.spacing.space4};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${tokens.spacing.space2};
  margin-top: ${tokens.spacing.space2};
`;

const ItemImage = styled(Image)`
  border-radius: ${tokens.borderRadius.radius2} ${tokens.borderRadius.radius2} 0 0;
`;

const OrdersContainer = styled.div`
  background-color: ${tokens.colors.cardBackground};
  border-radius: ${tokens.borderRadius.radius2};
  padding: ${tokens.spacing.space2};
  margin-bottom: ${tokens.spacing.space4};
`;

const ItemsCarousel = styled.div`
  margin: 0 -${tokens.spacing.space2};
  padding: 0 ${tokens.spacing.space2};
  display: flex;
  gap: ${tokens.spacing.space2};
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemCardWrapper = styled.div`
  flex: 0 0 auto;
  width: 168px;

  @media (min-width: ${tokens.breakpoints.tablet}) {
    width: 280px;
  }
`;

const ActionButton = styled(Button)`
  background-color: ${tokens.colors.cardBackground};
  color: ${tokens.colors.textPrimary};
  border: none;
  width: 100%;
  margin-bottom: ${tokens.spacing.space2};
  padding: ${tokens.spacing.space2};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  
  &:last-child {
    margin-bottom: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${tokens.spacing.space1};
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* Event Header */}
        <Header>
          <HeaderImage
            src={IMAGES.HEADER_BG}
            alt="Event venue"
            aspectRatio="40%"
          />
          <BackButton>
            <Icon name="arrow_back" />
          </BackButton>
          <HeaderContent>
            <H4>New York Red Bulls VS Inter Miami</H4>
            <Text color="secondary">Red Bull Arena</Text>
            <Text color="secondary">Jan 15, 2023 at 8:00PM PST</Text>
          </HeaderContent>
        </Header>

        <MainContent>
          {/* Your Orders Section */}
          <OrdersContainer>
            <Text variant="large" weight="bold" style={{ marginBottom: tokens.spacing.space2 }}>
              Your Orders
            </Text>
            
            <OrderCard>
              <div className="order-count">3</div>
              <Text>Aug 14, 2025</Text>
              <Text>8:00 PM</Text>
              <Text data-color="secondary">Order ID: PF9PAKFY</Text>
              <a href="/orders/PF9PAKFY" className="view-order">
                View Order
              </a>
            </OrderCard>

            <div style={{ marginTop: tokens.spacing.space2 }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: tokens.spacing.space2 
              }}>
                <Text variant="large" weight="bold">Your Items</Text>
                <Text color="secondary">
                  11 <Icon name="arrow_forward" />
                </Text>
              </div>
              
              <ItemsCarousel>
                <ItemCardWrapper>
                  <ItemCard>
                    <div className="image-container">
                      <img
                        src={IMAGES.EVENT_1}
                        alt="Soccer match view"
                      />
                    </div>
                    <div className="content">
                      <Text variant="large" weight="bold">Super long game n...</Text>
                      <Text>John Smith</Text>
                      <Text color="secondary">Sec 129 Row 9, Seat 1</Text>
                    </div>
                  </ItemCard>
                </ItemCardWrapper>
                <ItemCardWrapper>
                  <ItemCard>
                    <div className="image-container">
                      <img
                        src={IMAGES.EVENT_2}
                        alt="Stadium seating view"
                      />
                    </div>
                    <div className="content">
                      <Text variant="large" weight="bold">Sec 29 Row 9, Seat 8</Text>
                      <Text>John Smith</Text>
                      <Text color="secondary">Sec 129 Row 9, Seat 7</Text>
                    </div>
                  </ItemCard>
                </ItemCardWrapper>
              </ItemsCarousel>
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: tokens.spacing.space2 }}>
              <ActionButton>
                <Icon name="photo_camera" style={{ marginRight: tokens.spacing.space1 }} />
                <div>
                  <Text weight="bold">Sell</Text>
                  <Text color="secondary">Sell tickets at your own price</Text>
                </div>
              </ActionButton>
              <ActionButton>
                <Icon name="swap_horiz" style={{ marginRight: tokens.spacing.space1 }} />
                <div>
                  <Text weight="bold">Transfer</Text>
                  <Text color="secondary">Send tickets & items to anyone</Text>
                </div>
              </ActionButton>
              <ActionButton>
                <Icon name="upgrade" style={{ marginRight: tokens.spacing.space1 }} />
                <div>
                  <Text weight="bold">Upgrade</Text>
                  <Text color="secondary">Available upgrade offers</Text>
                </div>
              </ActionButton>
            </div>
          </OrdersContainer>

          {/* Rewards Section */}
          <Section>
            <Text variant="large" weight="bold">
              Rewards
            </Text>
            <div style={{ marginTop: tokens.spacing.space2 }}>
              <Text variant="large" weight="bold">
                10 points
              </Text>
              <Text variant="large">8 sales</Text>
            </div>
            <RewardCard style={{ marginTop: tokens.spacing.space2 }} $unlocked>
              <div>
                <Text weight="bold">25% discount on any ticket</Text>
                <Text>500 Points</Text>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }} />
              </div>
            </RewardCard>
          </Section>

          {/* Share Section */}
          <Section>
            <Button $variant="primary" $fullWidth>
              Share link with friends
            </Button>
          </Section>
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
