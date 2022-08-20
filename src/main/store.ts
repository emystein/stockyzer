import { ipcMain } from 'electron';
import ElectronStore from 'electron-store';

const schema = {
  symbols: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        value: {
          type: 'string',
        },
        label: {
          type: 'string',
        },
      },
    },
  },
};

const store = new ElectronStore({ schema });

ipcMain.handle('getSymbols', (event, key) => {
  return store.get('symbols');
});

ipcMain.handle('persistSymbols', (event, symbols) => {
  store.set('symbols', symbols);
});

export default store;
