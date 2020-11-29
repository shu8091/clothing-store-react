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
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://picsum.photos/400/600?random=2',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'snakers',
                imageUrl: 'https://picsum.photos/400/700?random=1',
                id: 3,
                linkUrl: 'snakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://picsum.photos/400/300?random=2',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://picsum.photos/400/300?random=1',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
            }]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
                ))
                }
            </div>
        );
    }
}

export default Directory;