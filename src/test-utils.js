import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from './providers/theme.provider';

const TestProvider = ({ children }) => (
	<ThemeProvider>{children}</ThemeProvider>
);

export * from '@testing-library/react';

const customRender = (ui, options) =>
	render(ui, {
		wrapper: TestProvider,
		...options,
	});

export { customRender as render };
