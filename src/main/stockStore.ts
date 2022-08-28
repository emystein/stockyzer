class StockStore {
  getSymbols = async () => {
    return await window.electron.ipcRenderer.getSymbols();
  };

  persistSymbols = (symbolsToPersist) => {
    window.electron.ipcRenderer.persistSymbols(symbolsToPersist);
  };
}

export default StockStore;
