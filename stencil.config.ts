import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { kompendium } from 'kompendium';
import guides from './guides';

export const config: Config = {
    hashFileNames: false,
    namespace: 'lime-elements',
    outputTargets: [
        {
            type: 'dist',
            copy: [{ src: 'style/' }],
        },
        {
            type: 'docs-custom',
            strict: true,
            generator: kompendium({
                typeRoot: './src/interface.d.ts',
                guides: guides,
            }),
        },
        {
            type: 'www',
            serviceWorker: null,
            dir: 'www',
            copy: [
                { src: 'style/color-palette-extended-light-mode-only.css' },
                { src: 'style/color-palette-extended.css' },
                {
                    src: '../node_modules/@lundalogik/lime-icons8/assets/',
                    dest: 'assets/',
                },
                {
                    src: '../node_modules/kompendium/dist/',
                    dest: 'assets/kompendium/',
                },
                {
                    src: 'favicon.svg',
                    dest: 'favicon.svg',
                },
            ],
        },
    ],
    commonjs: {
        namedExports: {
            'node_modules/react-dom/index.js': [
                'render',
                'unmountComponentAtNode',
            ],
            'node_modules/react/index.js': ['Component', 'forwardRef'],
        },
    },
    plugins: [sass()],
    tsconfig: './tsconfig.dev.json',
    globalStyle: 'src/global/core-styles.scss',
    testing: {
        moduleNameMapper: {
            '^lodash-es$': 'lodash',
            '@rjsf/core/lib/(.*)': '@rjsf/core/dist/cjs/$1',
        },
        timers: 'fake',
    },
};
