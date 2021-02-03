import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: './its-local/main.js',
  output: {
    file: './its-local/dist/main.js',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
  ],
};
