/**
 *  Module
 */


export class Module {

    /**
     * @type string
     */
    private id: string = null;

    /**
     * @type string
     */
    private icon: string = '';

    /**
     * @type string
     */
    private name: string = '';

    /**
     * @type string
     */
    private nameWc: string = '';

    /**
     * @type string
     */
    private label: string = '';

    /**
     * @type Array<string>
     */
    private autoloads: Array<string> = [];

    /**
     * @type Array<string>
     */
    private autoloadWs: Array<string> = [];

    /**
     * @return {string}
     */
    public getId() {
        return this.id;
    }

    /**
     * @param {string} id
     * @return {Module}
     */
    public setId(id: string) {
        this.id = id;
        return this;
    }

    /**
     * @return {string}
     */
    public getName() {
        return this.name;
    }

    /**
     * @param {string} name
     * @return {Module}
     */
    public setName(name: string) {
        this.name = name;
        return this;
    }

    /**
     * @return {string}
     */
    public getIcon() {
        return this.icon;
    }

    /**
     * @param {string} name
     * @return {Module}
     */
    public setIcon(icon: string) {
        this.icon = icon;
        return this;
    }
}
