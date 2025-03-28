import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('@babel/runtime-corejs3')) {
    return {
      url: require.resolve(specifier),
      format: 'module'
    };
  }
  return nextResolve(specifier, context);
}
