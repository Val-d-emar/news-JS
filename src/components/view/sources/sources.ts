import './sources.css';
import { SourceItem } from '../../../types';

class Sources {
    draw(data: SourceItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            console.error('Template #sourceItemTemp not found in DOM');
            return;
        }

        data.forEach((item: SourceItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) {
                itemName.textContent = item.name;
            }

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
