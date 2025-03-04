import { Component, h, Prop, Element, State } from '@stencil/core';
import { createRandomString } from '../../util/random-string';

/**
 * A tooltip can be used to display a descriptive text for any element.
 * The displayed content must be a brief and supplemental string of text,
 * identifying the element or describing its function for the user,
 * helping them better understand unfamiliar objects that aren't described
 * directly in the UI.
 *
 * ## Interaction
 * The tooltip appears after a slight delay, when the element is hovered;
 * and disappears as soon as the cursor leaves the element.
 * Therefore, users cannot interact with the tip, but if the trigger element
 * itself is interactive, it will remain interactible even with a tooltip bound
 * to it.
 *
 * :::note
 * In order to display the tooltip, the tooltip element and its trigger element
 * must be within the same document or document fragment.
 * A good practice is to just place them next to each other like below:
 *
 * ```html
 * <limel-button icon="search" id="tooltip-example" />
 * <limel-tooltip label="Search" elementId="tooltip-example" />
 * ```
 * :::
 *
 * ## Usage
 * - Keep in mind that tooltips can be distracting, and can be perceived as an interruption.
 * Use them only when they add significant value.
 * - A good tip is concise, helpful, and informative.
 * Don't explain the obvious or simply repeat what is already on the screen.
 * When used correctly, supplemental info of a tooltip helps to [declutter the UI](/#/DesignGuidelines/decluttering.md/).
 * - If the tip is essential to the primary tasks that the user is performing,
 * such as warnings or important notes, include the information directly in the
 * interface instead.
 * - When a component offers a helper text (e.g. [Input field](/#/component/limel-input-field/)),
 * use that, not a tooltip.
 * - Make sure to use the tooltip on an element that users naturally and
 * effortlessly recognize can be hovered.
 *
 * @exampleComponent limel-example-tooltip
 * @private
 */
@Component({
    tag: 'limel-tooltip',
    shadow: true,
    styleUrl: 'tooltip.scss',
})
export class Tooltip {
    /**
     * Short descriptive text of the owner element.
     */
    @Prop({ reflect: true })
    public label!: string;

    /**
     * Additional helper text for the element.
     * Example usage can be a keyboard shortcut to activate the function of the
     * owner element.
     */
    @Prop({ reflect: true })
    public helperLabel: string;

    /**
     * ID of the owner element that the tooltip should describe.
     * Must be a child within the same document fragment as the tooltip element
     * itself.
     */
    @Prop({ reflect: true })
    public elementId!: string;

    @State()
    private open: boolean;

    @Element()
    private host: HTMLLimelTooltipElement;

    private portalId: string;
    private tooltipId: string;
    private showTooltipTimeoutHandle: number;

    public constructor() {
        this.portalId = createRandomString();
        this.tooltipId = createRandomString();
    }

    public connectedCallback() {
        this.setOwnerAriaLabel();
        this.addListeners();
    }

    public disconnectedCallback() {
        this.removeListeners();
    }

    public render() {
        const tooltipZIndex = getComputedStyle(this.host).getPropertyValue(
            '--tooltip-z-index'
        );

        return (
            <div class="trigger-anchor">
                <limel-portal
                    visible={this.open}
                    containerId={this.portalId}
                    containerStyle={{
                        'z-index': tooltipZIndex,
                        'pointer-events': 'none',
                    }}
                >
                    <limel-tooltip-content
                        label={this.label}
                        helperLabel={this.helperLabel}
                        role="tooltip"
                        aria-hidden={!this.open}
                        id={this.tooltipId}
                    />
                </limel-portal>
            </div>
        );
    }

    private setOwnerAriaLabel() {
        const owner = this.getOwnerElement();
        owner?.setAttribute('aria-describedby', this.tooltipId);
    }

    private addListeners() {
        const owner = this.getOwnerElement();
        owner?.addEventListener('mouseover', this.showTooltip);
        owner?.addEventListener('mouseout', this.hideTooltip);
        owner?.addEventListener('click', this.hideTooltip);
    }

    private removeListeners() {
        const owner = this.getOwnerElement();
        owner?.removeEventListener('mouseover', this.showTooltip);
        owner?.removeEventListener('mouseout', this.hideTooltip);
        owner?.removeEventListener('click', this.hideTooltip);
    }

    private showTooltip = () => {
        const tooltipDelay = 500;
        this.showTooltipTimeoutHandle = window.setTimeout(() => {
            this.open = true;
        }, tooltipDelay);
    };

    private hideTooltip = () => {
        clearTimeout(this.showTooltipTimeoutHandle);
        this.open = false;
    };

    private getOwnerElement(): HTMLElement | undefined {
        let element: Node = this.host;

        do {
            element = element.parentNode;
        } while (
            element &&
            element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
            element.nodeType !== Node.DOCUMENT_NODE
        );

        return (element as ShadowRoot)?.getElementById(this.elementId);
    }
}
