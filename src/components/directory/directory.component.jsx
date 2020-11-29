import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://picsum.photos/400/500?random=1',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://picsum.photos/400/600?random=2',
                id: 2
            },
            {
                title: 'snakers',
                imageUrl: 'https://picsum.photos/400/700?random=1',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://picsum.photos/400/300?random=2',
                size: 'large',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://picsum.photos/400/300?random=1',
                size: 'large',
                id: 5
            }]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem 
                    key={id} 
                    title={title} 
                    imageUrl={imageUrl} 
                    size={size} 
                />
                ))
                }
            </div>
        );
    }
}

export default Directory;