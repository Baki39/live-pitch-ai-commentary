import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9885289f7cb944e5ab9f61348ccf0a17',
  appName: 'live-pitch-ai-commentary',
  webDir: 'dist',
  server: {
    url: 'https://9885289f-7cb9-44e5-ab9f-61348ccf0a17.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    },
    Microphone: {
      permissions: ['microphone']
    }
  }
};

export default config;