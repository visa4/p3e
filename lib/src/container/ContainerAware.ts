import {ContainerAwareInterface} from "./ContainerAwareInterface";
import {ContainerInterface} from "./ContainerInterface";
import {Container} from "./Container";
/**
 * ContainerAwareInterface
 */
export class ContainerAware implements ContainerAwareInterface {

    /**
     * @type {Container}
     */
    private container: ContainerInterface = new Container();

    /**
     * @return ContainerInterface
     */
    getContainer() {
        return this.container;
    }

    /**
     * @param {string} container
     * @return this
     */
    setContainer(container:ContainerInterface) {
        this.container = container;
        return this;
    }
}

