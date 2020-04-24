import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {imageArray} from '../../constants/config';
import '../../App.css'

const ImageWrapper = SortableContainer(({imageArray}) => {
    return (
        <div>
            <h2>Pictures Zone (Drag and Drop)</h2>
            {imageArray.map((value, index) => (
                <Images key={index} index={index} value={value} />
            ))}
        </div>
    );
});

const Images = SortableElement(({value}) => <div className="img">
    <center>
    <img src={value} className={'img-container'}/>
    </center>
</div>);

export default class Gallery extends Component {
    state = {
        imageArray: imageArray
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        if(oldIndex !== newIndex){
            confirmAlert({
                title: '',
                message: `Do you want to replace image${oldIndex + 1} for image${newIndex + 1} ?`,
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            this.setState(({imageArray}) => ({
                                imageArray: arrayMove(imageArray, oldIndex, newIndex),
                            }));
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => console.log("No movement")
                    }
                ]
            });
        }
    };

    render() {
        return <ImageWrapper imageArray={this.state.imageArray} onSortEnd={this.onSortEnd} />;
    }
}
