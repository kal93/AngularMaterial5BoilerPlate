/* SystemJS module definition */
declare var module: NodeModule;
/**
 * Sticky polyfill for column header
 * https://github.com/dollarshaveclub/stickybits
 */
declare module 'stickybits';

interface NodeModule {
  id: string;
}
