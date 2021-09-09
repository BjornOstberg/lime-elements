import { Component, h, State } from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * Basic Example
 */
@Component({
    tag: 'limel-example-dock-basic',
    shadow: true,
})
export class DockBasicExample {
    @State()
    private dockItems: DockItem[] = [
        {
            value: 'home',
            text: 'Lime', // btn name
            selectedColor: 'rgb(var(--color-green-default))',
            selected: true,
            icon: '-lime-logo-crm-filled',
            isP: true, // if condition to popover
        },
        {
            value: 'tables',
            text: 'Tables',
            selectedColor: 'rgb(var(--color-green-default))',
            icon: 'insert_table',
        },
        {
            value: 'search',
            text: 'Search',
            selectedColor: 'rgb(var(--color-green-default))',
            icon: 'search',
        },
        {
            value: 'create',
            text: 'Create object',
            selectedColor: 'rgb(var(--color-green-default))',
            icon: 'plus_math',
        },
        {
            value: 'pinned',
            text: 'Pinned tabs',
            isDynamic: true,
            selectedColor: 'rgb(var(--color-sky-default))',
            icon: 'bookmark_ribbon',
        },
    ];

    public render() {
        return [
            <limel-dock
                dockItems={this.dockItems}
                onChange={this.handleChange}
            />,

            <limel-example-value
                value={this.dockItems.find((i) => i.selected)}
            />,
        ];
    }

    private handleChange = (event: CustomEvent<DockItem>) => {
        this.dockItems = this.dockItems.map((item) => {
            return {
                ...item,
                selected: item.value === event.detail?.value,
            };
        });
    };
}
