import {
    IconSize,
    ListItem,
    ListSeparator,
    ListType,
} from '@limetech/lime-elements';
import { MDCList, MDCListActionEvent } from '@material/list';
import { MDCMenu, MDCMenuItemEvent } from '@material/menu';
import { MDCRipple } from '@material/ripple';
import { strings as listStrings } from '@material/list/constants';
import { strings as menuStrings } from '@material/menu/constants';
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Prop,
    Watch,
} from '@stencil/core';
import { ListRenderer } from './list-renderer';
import { ListRendererConfig } from './list-renderer-config';

const { ACTION_EVENT } = listStrings;
const { SELECTED_EVENT } = menuStrings;

/**
 * @exampleComponent limel-example-list
 * @exampleComponent limel-example-list-secondary
 * @exampleComponent limel-example-list-selectable
 * @exampleComponent limel-example-list-icons
 * @exampleComponent limel-example-list-badge-icons
 * @exampleComponent limel-example-list-checkbox
 * @exampleComponent limel-example-list-checkbox-icons
 * @exampleComponent limel-example-list-radio-button
 * @exampleComponent limel-example-list-radio-button-icons
 * @exampleComponent limel-example-list-action
 * @exampleComponent limel-example-list-striped
 * @exampleComponent limel-example-list-badge-icons-with-multiple-lines
 * @exampleComponent limel-example-list-grid
 */
@Component({
    tag: 'limel-list',
    shadow: true,
    styleUrl: 'list.scss',
})
export class List {
    /**
     * List of items to display
     */
    @Prop()
    public items: Array<ListItem | ListSeparator>;

    /**
     * Set to `true` if the list should display larger icons with a background
     */
    @Prop()
    public badgeIcons: boolean;

    /**
     * Size of the icons in the list
     */
    @Prop()
    public iconSize: IconSize = 'small';

    /**
     * The type of the list, omit to get a regular list. Available types are:
     * `selectable`: regular list with single selection.
     * `radio`: radio button list with single selection.
     * `checkbox`: checkbox list with multiple selection.
     * `menu`: menu list with single selection.
     */
    @Prop()
    public type: ListType;

    /**
     * By default, lists will display 3 lines of text, and then truncate the rest.
     * Consumers can increase or decrease this number by specifying
     * `maxLinesSecondaryText`. If consumer enters zero or negative
     * numbers we default to 1; and if they type decimals we round up.
     */
    // eslint-disable-next-line no-magic-numbers
    @Prop() maxLinesSecondaryText: number = 3;

    @Element()
    private element: HTMLLimelListElement;

    private config: ListRendererConfig;
    private listRenderer = new ListRenderer();
    private mdcList: MDCList;
    private mdcMenu: MDCMenu;
    private multiple: boolean;
    private selectable: boolean;

    /**
     * Fired when a new value has been selected from the list. Only fired if selectable is set to true
     */
    @Event()
    private change: EventEmitter<ListItem | ListItem[]>;

    /**
     * Fired when an action has been selected from the action menu of a list item
     */
    @Event()
    protected select: EventEmitter<ListItem | ListItem[]>;

    public connectedCallback() {
        this.setup();
    }

    public disconnectedCallback() {
        this.teardown();
    }

    public componentDidLoad() {
        this.setup();
    }

    public render() {
        this.config = {
            badgeIcons: this.badgeIcons,
            type: this.type,
            iconSize: this.iconSize,
        };
        let maxLinesSecondaryText = +this.maxLinesSecondaryText?.toFixed();
        if (this.maxLinesSecondaryText < 1) {
            maxLinesSecondaryText = 1;
        }

        const html = this.listRenderer.render(this.items, this.config);

        if (this.type === 'menu') {
            return <div class="mdc-menu mdc-menu-surface">{html}</div>;
        }

        return (
            <Host
                style={{
                    '--maxLinesSecondaryText': `${maxLinesSecondaryText}`,
                }}
            >
                {html}
            </Host>
        );
    }

    @Watch('type')
    protected handleType() {
        this.setupListeners();
    }

    @Watch('items')
    protected itemsChanged() {
        if (!this.mdcList) {
            return;
        }

        const listItems = this.items.filter(this.isListItem);

        if (!this.multiple) {
            this.mdcList.selectedIndex = listItems.findIndex(
                (item: ListItem) => item.selected
            );

            return;
        }

        this.mdcList.selectedIndex = listItems
            .filter((item: ListItem) => item.selected)
            .map((item: ListItem) => listItems.indexOf(item));
    }

    private setup = () => {
        if (this.type === 'menu') {
            this.setupMenu();
        } else {
            this.setupList();
        }

        this.setupListeners();
    };

    private setupList = () => {
        const element = this.element.shadowRoot.querySelector(
            '.mdc-deprecated-list'
        );
        if (!element) {
            return;
        }

        this.mdcList = new MDCList(element);
        this.mdcList.listElements.forEach((item) => new MDCRipple(item));
    };

    private setupMenu = () => {
        const element = this.element.shadowRoot.querySelector('.mdc-menu');
        if (!element) {
            return;
        }

        this.mdcMenu = new MDCMenu(element);
        this.mdcMenu.hasTypeahead = true;
        this.mdcMenu.wrapFocus = true;
        this.mdcMenu.items.forEach((item) => new MDCRipple(item));
    };

    private setupListeners = () => {
        if (this.type === 'menu') {
            this.setupMenuListeners();
        } else {
            this.setupListListeners();
        }
    };

    private setupListListeners = () => {
        if (!this.mdcList) {
            return;
        }

        this.mdcList.unlisten(ACTION_EVENT, this.handleAction);

        this.selectable = ['selectable', 'radio', 'checkbox', 'menu'].includes(
            this.type
        );
        this.multiple = this.type === 'checkbox';

        if (!this.selectable) {
            return;
        }

        this.mdcList.listen(ACTION_EVENT, this.handleAction);
        this.mdcList.singleSelection = !this.multiple;
    };

    private setupMenuListeners = () => {
        if (!this.mdcMenu) {
            return;
        }

        this.mdcMenu.unlisten(SELECTED_EVENT, this.handleMenuSelect);
        this.selectable = true;
        this.mdcMenu.listen(SELECTED_EVENT, this.handleMenuSelect);
    };

    private teardown = () => {
        this.mdcList?.unlisten(ACTION_EVENT, this.handleAction);
        this.mdcList?.destroy();

        this.mdcMenu?.unlisten(SELECTED_EVENT, this.handleMenuSelect);
        this.mdcMenu?.destroy();
    };

    private handleAction = (event: MDCListActionEvent) => {
        if (!this.multiple) {
            this.handleSingleSelect(event.detail.index);

            return;
        }

        this.handleMultiSelect(event.detail.index);
    };

    private handleMenuSelect = (event: MDCMenuItemEvent) => {
        this.handleSingleSelect(event.detail.index);
    };

    private handleSingleSelect = (index: number) => {
        const listItems = this.items.filter(this.isListItem) as ListItem[];
        if (listItems[index].disabled) {
            return;
        }

        const selectedItem: ListItem = listItems.find((item: ListItem) => {
            return !!item.selected;
        });

        if (selectedItem) {
            this.change.emit({ ...selectedItem, selected: false });
        }

        if (listItems[index] !== selectedItem) {
            if (this.type === 'menu') {
                this.change.emit({ ...listItems[index], selected: false });

                return;
            }

            this.change.emit({ ...listItems[index], selected: true });
        }
    };

    private handleMultiSelect = (index: number) => {
        const listItems = this.items.filter(this.isListItem) as ListItem[];
        if (listItems[index].disabled) {
            return;
        }

        const selectedItems: ListItem[] = listItems
            .filter((item: ListItem, listIndex: number) => {
                if (listIndex === index) {
                    // This is the item that was selected or deselected,
                    // so we negate its previous selection status.
                    return !item.selected;
                }

                // This is an item that didn't change, so we keep its selection status.
                return item.selected;
            })
            .map((item: ListItem) => {
                return { ...item, selected: true };
            });

        this.change.emit(selectedItems);
    };

    private isListItem = (item: ListItem): boolean => {
        return !('separator' in item);
    };
}
