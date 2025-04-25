import React from 'react';
import styled from 'styled-components';
import { tokens } from './styles/tokens';
import { H4, Text } from './components/Typography';
import { OrderCard, ItemCard, ActionCard, RewardCard } from './components/Card';
import { Button } from './components/Button';

const AppContainer = styled.div\`
  min-height: 100vh;
  background-color: ${tokens.colors.background};
  color: ${tokens.colors.textPrimary};
  padding: ${tokens.spacing.space2};
\`;

const Header = styled.header\`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.space2};
  padding: ${tokens.spacing.space2} 0;
  margin-bottom: ${tokens.spacing.space3};

  .back-button {
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
  }
\`;

const Section = styled.section\`
  margin-bottom: ${tokens.spacing.space4};
\`;

const Grid = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${tokens.spacing.space2};
  margin-top: ${tokens.spacing.space2};
\`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <button className="back-button">←</button>
        <div>
          <H4>New York Red Bulls VS Inter Miami</H4>
          <Text color="secondary">Red Bull Arena</Text>
          <Text color="secondary">Jan 15, 2023 at 8:00PM PST</Text>
        </div>
      </Header>

      <Section>
        <Text variant="large" weight="bold">Your Orders</Text>
        <Grid>
          <OrderCard>
            <Text>Aug 14, 2025</Text>
            <Text color="secondary">Order ID: PF9PAKFY</Text>
            <Text variant="large" weight="bold">3</Text>
            <Button variant="secondary" fullWidth>View Order</Button>
          </OrderCard>
        </Grid>
      </Section>

      <Section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text variant="large" weight="bold">Your Items</Text>
          <Text color="secondary">11 →</Text>
        </div>
        <Grid>
          <ItemCard>
            <div className="image-container">
              <img src="/stadium1.jpg" alt="Stadium view" />
            </div>
            <div className="content">
              <Text variant="large" weight="bold">Super long game n...</Text>
              <Text>John Smith</Text>
              <Text color="secondary">Sec 129 Row 9, Seat 1</Text>
            </div>
          </ItemCard>
          <ItemCard>
            <div className="image-container">
              <img src="/stadium2.jpg" alt="Stadium view" />
            </div>
            <div className="content">
              <Text variant="large" weight="bold">Sec 29 Row 9, Seat 8</Text>
              <Text>John Smith</Text>
              <Text color="secondary">Sec 129 Row 9, Seat 7</Text>
            </div>
          </ItemCard>
        </Grid>
      </Section>

      <Section>
        <ActionCard>
          <span className="icon">📸</span>
          <div>
            <Text weight="bold">Sell</Text>
            <Text color="secondary">Sell tickets at your own price</Text>
          </div>
        </ActionCard>
        <ActionCard style={{ marginTop: tokens.spacing.space2 }}>
          <span className="icon">↔️</span>
          <div>
            <Text weight="bold">Transfers</Text>
            <Text color="secondary">Send tickets & items to anyone</Text>
          </div>
        </ActionCard>
        <ActionCard style={{ marginTop: tokens.spacing.space2 }}>
          <span className="icon">⬆️</span>
          <div>
            <Text weight="bold">Upgrade</Text>
            <Text color="secondary">Available upgrade offers</Text>
          </div>
        </ActionCard>
      </Section>

      <Section>
        <Text variant="large" weight="bold">Resale</Text>
        <ActionCard style={{ marginTop: tokens.spacing.space2 }}>
          <span className="icon">📋</span>
          <div>
            <Text weight="bold">Your listings</Text>
            <Text color="secondary">Manage your listings</Text>
          </div>
          <Text style={{ marginLeft: 'auto' }}>→</Text>
        </ActionCard>
      </Section>

      <Section>
        <Text variant="large" weight="bold">Rewards</Text>
        <div style={{ marginTop: tokens.spacing.space2 }}>
          <Text variant="large" weight="bold">10 points</Text>
          <Text variant="large">8 sales</Text>
        </div>
        <RewardCard style={{ marginTop: tokens.spacing.space2 }} unlocked>
          <div>
            <Text weight="bold">25% discount on any ticket</Text>
            <Text>500 Points</Text>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }} />
          </div>
        </RewardCard>
      </Section>

      <Section>
        <Button variant="primary" fullWidth>Share link with friends</Button>
      </Section>
    </AppContainer>
  );
};

export default App; 