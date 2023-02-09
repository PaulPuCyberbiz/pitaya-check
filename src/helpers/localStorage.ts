export class LocalStorage {
  static getObject(key?: string) {
    return key ? JSON.parse(localStorage.getItem(key) || '{}') : undefined;
  }

  static setObject(key: string, obj: object) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
