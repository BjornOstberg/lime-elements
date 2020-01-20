import { Component, h, State } from '@stencil/core';

const schema = {
    title: 'My form',
    description: 'Lorem ipsum dolor sit amet',
    type: 'object',
    required: ['title'],
    properties: {
        title: {
            type: 'string',
            title: 'Title',
            default: 'A new task',
            description: 'Lorem ipsum dolor sit amet',
        },
        done: {
            type: 'boolean',
            title: 'Done?',
            default: false,
            required: true,
        },
        color: {
            type: 'string',
            title: 'Color',
            enum: ['red', 'green', 'blue'],
        },
        colorMask: {
            type: 'array',
            title: 'Color mask',
            description: 'Pick a color',
            uniqueItems: true,
            items: {
                title: 'Color',
                type: 'string',
                anyOf: [
                    {
                        type: 'string',
                        enum: ['#ff0000'],
                        title: 'Red',
                    },
                    {
                        type: 'string',
                        enum: ['#00ff00'],
                        title: 'Green',
                    },
                    {
                        type: 'string',
                        enum: ['#0000ff'],
                        title: 'Blue',
                    },
                ],
            },
        },
    },
};

@Component({
    tag: 'limel-example-form',
    shadow: true,
})
export class FormExample {
    @State()
    private formData: object = {
        title: 'Test',
    };

    constructor() {
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    public render() {
        return [
            <limel-form
                onChange={this.handleFormChange}
                value={this.formData}
                schema={schema}
            />,
            <br />,
            <br />,
            'Value: ',
            <pre>{JSON.stringify(this.formData, null, '    ')}</pre>,
        ];
    }

    private handleFormChange(event) {
        this.formData = event.detail;
    }
}
