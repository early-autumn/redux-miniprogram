/*
 * @Author: early-autumn
 * @Date: 2020-04-04 14:50:22
 * @LastEditors: early-autumn
 * @LastEditTime: 2020-04-06 19:27:53
 */
import { createStore } from 'redux';
import Provider from '../../src/core/Provider';

describe('测试 core/Provider.ts', () => {
  it('测试 App Options', () => {
    const store = createStore(() => ({}));
    const options = {};

    const appOptions = Provider(store)(options);

    // appOptions 上面应该有一个 store 属性
    expect(appOptions.store).toBe(store);
  });
});
