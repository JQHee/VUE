/**
 * localStorage本地存储
 */

class StorageUtil {
  /**
   * 保存数据到本地
   * key: 保存的键
   * data: 写入的数据
   */
  static save (key, data) {
    try {
      localStorage.setItem(key, data)
    } catch (e) {
    }
  }

  /**
   * 读取本地数据
   * key: 读取的键
   */
  static read (key) {
    try {
      return localStorage.getItem(key)
    } catch (e) {
    }
  }
}

export default StorageUtil
