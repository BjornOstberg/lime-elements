import { ListItem } from '@limetech/lime-elements';
import { Component, h } from '@stencil/core';

/**
 * List with grid layout
 * To display list items in a grid layout instead of a vertical column,
 * simply add `has-grid-layout` class to
 * the component.
 *
 * This layout can be customized, using a few CSS variables.
 * :::warning
 * - This layout should not be used with lists that have checkboxes or radio buttons.
 * - Also, it is recommended to avoid using secondary text with this layout.
 */
@Component({
    tag: 'limel-menu-list-grid',
    shadow: true,
})
export class ListMenuExample {
    private items: Array<ListItem<number>> = [
        {
            text: 'Company',
            value: 1,
            icon: 'gorilla',
        },
        {
            text: 'Deals',
            value: 2,
            icon: 'alien',
            iconColor: 'rgb(var(--color-lime-light))',
        },
        {
            text: 'Persons',
            value: 3,
            icon: 'virus',
            iconColor: 'rgb(var(--color-red-light))',
        },
        {
            text: 'Agreement',
            value: 4,
            icon: 'wheat',
            iconColor: 'rgb(var(--color-amber-default))',
        },
        {
            text: 'History',
            value: 5,
            icon: 'steam_engine',
            iconColor: 'rgb(var(--color-glaucous-default))',
        },
    ];

    public render() {
        return (
            <limel-list
                items={this.items}
                badgeIcons={true}
                class="has-grid-layout has-interactive-items"
            />
        );
    }
}
