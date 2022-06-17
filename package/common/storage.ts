enum StorageType {
  local = 'localStorage',
  session = 'sessionStorage'
}

class EtStorage {
  storage: Storage
  constructor(type: StorageType) {
    this.storage = type === StorageType.local ? window.localStorage : window.sessionStorage;
  }
  
  set(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    this.storage.setItem(key, value);
  }

  get(key: string) {
    const value = this.storage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  delete(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const LocalStorage = new EtStorage(StorageType.local);
export const SessionStorage = new EtStorage(StorageType.session);