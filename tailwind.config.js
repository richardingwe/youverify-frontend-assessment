const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#C2E2E933',
                    200: '#46B2C8',
                    300: '#0F808C',
                    400: '#1C697A',
                    500: '#023A59',
                },
                title: '#C2E2E9'
            },
            fontSize: {
                12: '12px'
            },
            backgroundImage: {
                'map': "url('assets/guyana-distance 1.png')",
            }
        }
    }
};