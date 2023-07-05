
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'


const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>;

export default meta
type Story = StoryObj<typeof meta>

/*

export const Primary1: Story = {
render: ()=> <Button label ={'Button'}/>
} /!* надо изменить расширение файла на  tsx   и такой синтаксис
позволит использовать хуки И БУДЕТ наглядно как взаимодействовать
с компонентой*!/

*/


export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
}
export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary Button',
        disabled: false,
    },
}
export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Tertiary Button',
        disabled: false,
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        children: 'Full Width Button',
        disabled: false,
        fullWidth: true,
    },
}

export const AsLink: Story = {
    args: {
        variant: 'primary',
        children: 'Link that looks like a button',
        as: 'a',
    },
}