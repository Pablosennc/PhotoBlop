import { Title, Group } from '@mantine/core';

const APP_TITLE = 'PhotoBlop';

function AstroHeader() {
  return (
    <header style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      background: 'linear-gradient(90deg, rgba(30,30,60,0.95), rgba(70,40,120,0.95))',
      boxShadow: '0 6px 30px rgba(0,0,0,0.25)',
      backdropFilter: 'blur(6px)',
      padding: '12px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Group spacing="xs">
        <span style={{ fontSize: 26, marginRight: 6 }}></span>
        <Title order={1} style={{ color: '#fff', letterSpacing: 2, fontFamily: 'cursive', fontWeight: 700 }}>
          {APP_TITLE} 
        </Title>
      </Group>
    </header>
  );
}

export default AstroHeader;
