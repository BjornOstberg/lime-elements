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
            text: 'Lime',
            selectedColor: 'rgb(var(--color-green-default))',
            selected: true,
            icon: '-lime-logo-outlined-colored',
        },
        {
            value: 'tables',
            text: 'Tables',
            selectedColor: 'rgb(var(--color-green-default))',
            icon: 'insert_table',
            isPopover: true, // if condition to popover
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
            isCollapsible: true,
        },
        {
            value: 'pinned again',
            text: 'Pinned another tab',
            isDynamic: true,
            selectedColor: 'rgb(var(--color-sky-default))',
            icon: 'bookmark_ribbon',
            isCollapsible: true, // be able to see second level menu
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
