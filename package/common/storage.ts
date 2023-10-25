enum StorageType {
  local = 'localStorage',
  session = 'sessionStorage'
}

class EtStorage {
  storage: Storage
  constructor(type: StorageType) {
    this.storage = type === StorageType.local ? window.localStorage : window.sessionStorage;
  }
  
  setItem(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    this.storage.setItem(key, value);
  }

  getItem(key: string) {
    const value = this.storage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const LocalStorage = new EtStorage(StorageType.local);
export const SessionStorage = new EtStorage(StorageType.session);