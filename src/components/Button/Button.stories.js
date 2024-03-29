import React from 'react';
import Button from './Button';

import { actions } from '@storybook/addon-actions';

import styled from 'styled-components';

export default {
	title: 'Components/Button',
	component: Button,
};

const events = actions({ onClick: 'clicked' });

const Toolbar = styled.div`
	& > * {
		margin-right: 1rem;
	}
`;

export const usage = () => (
	<>
		<p>Enable</p>
		<Toolbar>
			<Button {...events}>Default</Button>
			<Button color="primary" {...events}>
				Primary
			</Button>
			<Button color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
		<p>Disable</p>
		<Toolbar>
			<Button disabled {...events}>
				Default
			</Button>
			<Button disabled color="primary" {...events}>
				Primary
			</Button>
			<Button disabled color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
	</>
);

export const outlined = () => (
	<>
		<p>Enable</p>
		<Toolbar>
			<Button variant="outlined" {...events}>
				Default
			</Button>
			<Button variant="outlined" color="primary" {...events}>
				Primary
			</Button>
			<Button variant="outlined" color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
		<p>Disable</p>
		<Toolbar>
			<Button variant="outlined" disabled {...events}>
				Default
			</Button>
			<Button variant="outlined" disabled color="primary" {...events}>
				Primary
			</Button>
			<Button variant="outlined" disabled color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
	</>
);

export const link = () => (
	<>
		<p>Enable</p>
		<Toolbar>
			<Button variant="link" {...events}>
				Default
			</Button>
			<Button variant="link" color="primary" {...events}>
				Primary
			</Button>
			<Button variant="link" color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
		<p>Disable</p>
		<Toolbar>
			<Button variant="link" disabled {...events}>
				Default
			</Button>
			<Button variant="link" disabled color="primary" {...events}>
				Primary
			</Button>
			<Button variant="link" disabled color="danger" {...events}>
				Danger
			</Button>
		</Toolbar>
	</>
);
